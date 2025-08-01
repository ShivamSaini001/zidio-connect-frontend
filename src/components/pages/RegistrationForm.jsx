import { useEffect, useState } from 'react';
import { Mail, Lock, User, Clock } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import {
    Input
} from '@/components/ui/input';
import {
    Button
} from '@/components/ui/button';
import {
    Label
} from '@/components/ui/label';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs';
import { Link, useNavigate } from 'react-router';
import { Checkbox } from '../ui/checkbox';
import { registerUser, sendOTP } from '@/services/AuthService';
import { userAlreadyLoggedIn } from '@/utils/Helper';



export default function RegistrationForm(
    { title = 'Create your account',
        description = 'Sign up to get started with our platform' }) {

    useEffect(() => {
        userAlreadyLoggedIn();
    }, []);

    // Form states
    const [registrationFormData, setRegistrationFormData] = new useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        selectedRole: "",
        verificationCode: ""
    });

    const [formError, setFormError] = useState({});
    const [acceptTermsAndConditions, setAcceptTermsAndConditions] = useState(false);

    // Process states
    const [step, setStep] = useState('registration'); // 'registration' or 'verification'
    const [otpResponse, setOtpResponse] = useState(null);
    const [resendOtpTime, setResendOtpTime] = new useState(0);
    const navigate = useNavigate();

    console.log(registrationFormData)
    console.log(otpResponse)

    // Available roles
    const roles = [
        { id: 'student', name: 'Student' },
        { id: 'recruiter', name: 'Recruiter' },
        { id: 'teacher', name: 'Teacher' },
    ];

    // Get data from Form Inputs.
    function handleChange(e) {
        const { name, value } = e.target;
        setRegistrationFormData((prevState) => ({ ...prevState, [name]: value.trim() }));
        setFormError((prevState) => ({ ...prevState, [name]: "" }))
    }

    // clear Form data.
    function clearFrom() {
        setRegistrationFormData({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            selectedRole: "",
            verificationCode: ""
        })
    }

    function validateRegistrationForm(formData) {
        let validForm = true;
        Object.entries(formData).forEach(([key, value]) => {
            let validResult = validateDataOfSingleField(key, value);
            if (!validResult) {
                validForm = false;
            }
        });
        return validForm;
    }

    function validateDataOfSingleField(key, value) {
        let isValid = true;
        // If validation rules exists for a input field.
        if (validationConfig[key] !== undefined) {
            // Getting all validation rules one by one for a particullar input field.
            validationConfig[key].forEach((rule) => {
                if (rule.required && !value.length) {
                    setFormError((prevState) => ({ ...prevState, [key]: rule.errorMessage }))
                    isValid = false;
                }
                else if (value.length < rule.minLength) {
                    setFormError((prevState) => ({ ...prevState, [key]: rule.errorMessage }))
                    isValid = false;
                }
                else if (rule.pattern && !rule.pattern.test(value)) {
                    setFormError((prevState) => ({ ...prevState, [key]: rule.errorMessage }))
                    isValid = false;
                }
                else if (rule.notMatch) {
                    setFormError((prevState) => ({ ...prevState, [key]: rule.errorMessage }))
                    isValid = false;
                }
            });
        }
        return isValid;
    }

    // Validation error messages
    const validationConfig = {
        // Error Messages for first name.
        firstName: [
            // First Error Message.
            { pattern: /^[A-Za-z]+$/, errorMessage: "First name can contains only letters" },
            // Second Error Message.
            { minLength: 3, errorMessage: "First name is too short, please enter at least 3 characters." },
            // Third Error Message.
            { required: true, errorMessage: "Please fill in your first name." },
        ],
        // Error Messages for last name.
        lastName: [
            // First Error Message.
            { pattern: /^[A-Za-z]+$/, errorMessage: "Last name can contains only letters" },
            // Second Error Message.
            { minLength: 3, errorMessage: "Last name is too short, please enter at least 3 characters." },
            // Third Error Message.
            { required: true, errorMessage: "Please fill in your last name." },
        ],
        // Error Messages for email.
        email: [
            // First Error Message.
            { pattern: /^[a-zA-Z]+[0-9]{4,}@[a-z]+\.[a-z]{2,}$/, errorMessage: "Please enter a valid email address." },
            // Second Error Message.
            { required: true, errorMessage: "Please fill in your email." },
        ],
        // Error Messages for password.
        password: [
            // First Error Message.
            { pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/, errorMessage: "Must contains at least 1 Number, 1 Uppercase letter, 1 Special symbol and must be at least 8 characters long." },
            // Second Error Message.
            { required: true, errorMessage: "Please fill in your password." },
        ],
        // Error Messages for confirmPassword.
        confirmPassword: [
            // First Error Message.
            { notMatch: registrationFormData.confirmPassword !== registrationFormData.password, errorMessage: "Confirm password does not match the original password." },
            // Second Error Message.
            { required: true, errorMessage: "Please fill in your confirm password." },
        ],
    }

    // Handle form submission
    const handleSubmit = async () => {
        // Otp is empty
        if (!registrationFormData.verificationCode) {
            setFormError((prevState) => ({ ...prevState, verificationCode: 'Please fill in your OTP.' }))
            return;
        }
        // Otp is valid
        if (!/^[0-9]{6}$/.test(String(registrationFormData.verificationCode).trim())) {
            setFormError((prevState) => ({ ...prevState, verificationCode: 'Please enter a valid 6 digit OTP.' }));
            return;
        }

        const isSuccess = await registerUser(registrationFormData);
        console.log(isSuccess)
        if (isSuccess) {
            // Redirect to the login page
            console.log(isSuccess)
            navigate('/sign-in');
        }

    };

    // Handle verification code submission
    const handleVerify = async (e) => {
        if (!validateRegistrationForm(registrationFormData) || !registrationFormData.selectedRole || !acceptTermsAndConditions) {
            if (!registrationFormData.selectedRole) {
                setFormError((prevState) => ({ ...prevState, selectedRole: "Please select your role!!" }))
            }
            if (!acceptTermsAndConditions) {
                setFormError((prevState) => ({ ...prevState, terms: "Please accept our terms and conditions." }))
            }
            return;
        }

        e.target.disabled = true;
        const response = await sendOTP(registrationFormData.email);
        if (response != undefined) {
            console.log(response)
            setOtpResponse(response);
            setResendOtpTime(response.otpResendAfterSeconds);
            setStep('verification');
        } else {
            e.target.disabled = false;
        }
    };

    // Resend verification code
    const handleResendCode = () => {
        setRegistrationFormData((prevState) => ({ ...prevState, verificationCode: "" }));
        setFormError((prevState) => ({ ...prevState, verificationCode: "" }));
        handleVerify();
    };

    function updateResendOtpTime(prevTime) {
        if (prevTime > 0) {
            setTimeout(() => {
                setResendOtpTime(prevTime - 1);
            }, 1000);
        }
    }

    return (
        <div className="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {description}
                    </p>
                </div>

                <Tabs value={step} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger
                            value="registration"
                            disabled={step === 'verification'}
                            onClick={() => setStep('registration')}
                        >
                            Registration
                        </TabsTrigger>
                        <TabsTrigger
                            value="verification"
                            disabled={otpResponse === null}
                            onClick={() => step === 'verification' ? null : setStep('verification')}
                        >
                            Verification
                        </TabsTrigger>
                    </TabsList>

                    {/* Registration Tab */}
                    <TabsContent value="registration">
                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                                <CardDescription>
                                    Fill in your details to create a new account
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Full Name */}
                                <div className='flex gap-4'>
                                    {/* First name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <User className="h-4 w-4 text-gray-500" />
                                            </div>
                                            <Input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                placeholder="Enter here"
                                                value={registrationFormData.firstName}
                                                onChange={(e) => handleChange(e)}
                                                className={`pl-10 ${formError.firstName ? 'border-red-500' : ''}`}
                                            />
                                        </div>
                                        {formError.firstName && (
                                            <p className="text-sm text-red-500">{formError.firstName}</p>
                                        )}
                                    </div>

                                    {/* Last name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <User className="h-4 w-4 text-gray-500" />
                                            </div>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                placeholder="Enter here"
                                                value={registrationFormData.lastName}
                                                onChange={(e) => handleChange(e)}
                                                className={`pl-10 ${formError.lastName ? 'border-red-500' : ''}`}
                                            />
                                        </div>
                                        {formError.lastName && (
                                            <p className="text-sm text-red-500">{formError.lastName}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Mail className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="your@email.com"
                                            value={registrationFormData.email}
                                            onChange={(e) => handleChange(e)}
                                            className={`pl-10 ${formError.email ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    {formError.email && (
                                        <p className="text-sm text-red-500">{formError.email}</p>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Lock className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="••••••••"
                                            value={registrationFormData.password}
                                            onChange={(e) => handleChange(e)}
                                            className={`pl-10 ${formError.password ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    {formError.password && (
                                        <p className="text-sm text-red-500">{formError.password}</p>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Lock className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <Input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="••••••••"
                                            value={registrationFormData.confirmPassword}
                                            onChange={(e) => handleChange(e)}
                                            className={`pl-10 ${formError.confirmPassword ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    {formError.confirmPassword && (
                                        <p className="text-sm text-red-500">{formError.confirmPassword}</p>
                                    )}
                                </div>

                                {/* Role Selection */}
                                <div className="space-y-2">
                                    <Label htmlFor="role">Select Role</Label>
                                    <Select
                                        value={registrationFormData.selectedRole}
                                        onValueChange={(e) => {
                                            setRegistrationFormData({ ...registrationFormData, selectedRole: e });
                                            delete formError.selectedRole;
                                        }}
                                    >
                                        <SelectTrigger id="role" className={formError.selectedRole ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Select a role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {roles.map((role) => (
                                                <SelectItem key={role.id} value={role.id}>
                                                    {role.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {formError.selectedRole && (
                                        <p className="text-sm text-red-500">{formError.selectedRole}</p>
                                    )}
                                </div>

                                {/* Terms and Condtions */}
                                <div className="space-y-2">
                                    <div className="flex flex-col items-start gap-3">
                                        <div className="flex items-start gap-3">
                                            <Checkbox id="terms"
                                                checked={acceptTermsAndConditions}
                                                onClick={(e) => {
                                                    setAcceptTermsAndConditions(!acceptTermsAndConditions);
                                                    delete formError.terms;
                                                }}
                                                className={formError.terms ? 'border-red-500' : ''}
                                            />
                                            <div className="grid gap-2">
                                                <Label htmlFor="terms">Accept terms and conditions</Label>
                                                <p className="text-muted-foreground text-sm">
                                                    By clicking this checkbox, you agree to the terms and conditions.
                                                </p>
                                            </div>
                                        </div>
                                        {
                                            formError.terms && (
                                                <p className="text-sm text-red-500">{formError.terms}</p>
                                            )
                                        }
                                    </div>

                                </div>
                            </CardContent>
                            <CardFooter className={'flex flex-col gap-5'}>
                                <Button
                                    className="w-full"
                                    onClick={handleVerify}
                                    disabled={resendOtpTime > 0}
                                >
                                    Verify Email
                                    {
                                        resendOtpTime > 0 && <span className="text-red-500">
                                            ({resendOtpTime}s)
                                        </span>
                                    }
                                </Button>
                                <p>
                                    Already have an account? &nbsp;
                                    <Link to={"/sign-in"} className="text-blue-500 underline">
                                        Login
                                    </Link>
                                </p>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    {/* Verification Tab */}
                    <TabsContent value="verification">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-center text-primary">
                                    Email Verification
                                </CardTitle>
                                <CardDescription className="text-center space-y-2">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <p className="text-blue-600 font-medium">
                                            We've sent a verification code to{' '}
                                            <span className="font-bold underline decoration-2">
                                                {registrationFormData.email}
                                            </span>
                                        </p>
                                        <p className="text-blue-500 mt-5">
                                            <span className="inline-flex items-center">
                                                <Clock className="h-4 w-4 me-2 text-blue-600" />
                                                OTP will be valid for{' '}
                                                <span className="font-semibold mx-1">
                                                    {otpResponse?.otpValidityInMinutes ?? 0}
                                                </span>
                                                Minutes
                                            </span>
                                        </p>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Verification Code */}
                                <div className="space-y-2 ">
                                    <Label htmlFor="verificationCode">Enter OTP</Label>
                                    <div className='max-w-64 mx-auto'>
                                        <InputOTP
                                            id="verificationCode"
                                            maxLength={6}
                                            value={registrationFormData.verificationCode ?? ''}
                                            onChange={(val) => {
                                                setRegistrationFormData((prev) => ({
                                                    ...prev,
                                                    verificationCode: val,
                                                }))
                                                delete formError.verificationCode;
                                            }}
                                        >
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>
                                    {formError.verificationCode && (
                                        <p className="text-sm text-red-500 top-full">{formError.verificationCode}</p>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col space-y-2">
                                <Button
                                    className="w-full"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                                <div className="flex justify-between w-full text-sm">
                                    <Button
                                        variant="link"
                                        onClick={handleResendCode}
                                        className="p-0 h-auto"
                                        disabled={resendOtpTime > 0}
                                    >
                                        Resend OTP
                                        {
                                            resendOtpTime > 0 && <span className="text-red-500">
                                                ({resendOtpTime}s)
                                            </span>
                                        }
                                        {/* update time using IIFE function*/}
                                        {
                                            updateResendOtpTime(resendOtpTime)
                                        }
                                    </Button>
                                    <Button
                                        variant="link"
                                        onClick={() => {
                                            setRegistrationFormData((prev) => ({ ...prev, verificationCode: "" }));
                                            setFormError((prev) => ({ ...prev, verificationCode: "" }));
                                            setStep('registration')
                                        }}
                                        className="p-0 h-auto"
                                    >
                                        Edit details
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}