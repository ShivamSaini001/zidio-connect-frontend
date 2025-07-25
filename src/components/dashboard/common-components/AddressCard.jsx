import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import InputField from './input/InputField'

const AddressCard = (
  {
    formData,
    handleAddressChange,
    formDataErrors,
    isEditing,
  }
) => {
  return (
    <Card className={'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden'}>
      <CardHeader>
        <div>
          <p className='scroll-m-20 text-3xl font-semibold tracking-tight'>
            Your Address
          </p>
        </div>
      </CardHeader>

      <CardContent className={'grid md:grid-cols-2 grid-cols-1 gap-5'}>

        {/* City  */}
        <InputField
          label={"Current City"}
          value={formData?.address?.city || ''}
          onChange={(e) => handleAddressChange('city', e.target.value)}
          placeholder={"Enter City"}
          name="city"
          isRequired={true}
          isEditing={isEditing}
          error={formDataErrors?.address?.city}
        />

        {/* State */}
        <InputField
          label={"Current State"}
          value={formData?.address?.state || ''}
          onChange={(e) => handleAddressChange('state', e.target.value)}
          placeholder={"Enter State"}
          name="state"
          isRequired={true}
          isEditing={isEditing}
          error={formDataErrors?.address?.state}
        />

        {/* Country */}
        <InputField
          label={"Country"}
          value={formData?.address?.country || ''}
          onChange={(e) => handleAddressChange('country', e.target.value)}
          placeholder={"Enter Countary"}
          name="country"
          isRequired={true}
          isEditing={isEditing}
          error={formDataErrors?.address?.country}
        />

        {/* Zip code */}
        <InputField
          label={"Zip code"}
          value={formData?.address?.zipCode || ''}
          type='number'
          onChange={(e) => handleAddressChange('zipCode', e.target.value)}
          placeholder={"Enter Zip Code"}
          name="zipCode"
          isRequired={true}
          isEditing={isEditing}
          error={formDataErrors?.address?.zipCode}
        />
      </CardContent>
    </Card>
  )
}

export default AddressCard
