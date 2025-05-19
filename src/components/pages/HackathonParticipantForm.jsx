import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function HackathonParticipantForm() {
  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Hackathon Participant Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="participantId">Participant ID</Label>
          <Input id="participantId" placeholder="Enter Participant ID" />
        </div>
        <div>
          <Label htmlFor="hackathonId">Hackathon ID</Label>
          <Input id="hackathonId" placeholder="Enter Hackathon ID" />
        </div>
        <div>
          <Label htmlFor="studentId">Student ID</Label>
          <Input id="studentId" placeholder="Enter Student ID" />
        </div>
        <div>
          <Label htmlFor="teamName">Team Name</Label>
          <Input id="teamName" placeholder="Enter Team Name (optional)" />
        </div>
        <Button className="w-full mt-4">Register Participant</Button>
      </CardContent>
    </Card>
  )
}
