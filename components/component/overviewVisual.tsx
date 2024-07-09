/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GgBanbzSuMY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { CartesianGrid, XAxis, Pie, PieChart, Bar, BarChart } from "recharts"

export default function Component() {
  const [selectedDormitory, setSelectedDormitory] = useState("Dormitory A")
  const [selectedFloor, setSelectedFloor] = useState(null)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [showVisualData, setShowVisualData] = useState(false)
  const dormitoryData = {
    "Dormitory A": {
      totalBeds: 200,
      floors: {
        "1st Floor": {
          rooms: {
            "101": [
              { name: "John Doe", major: "Computer Science", grade: "Junior" },
              { name: "Jane Smith", major: "Business Administration", grade: "Sophomore" },
              { name: "Michael Johnson", major: "Electrical Engineering", grade: "Senior" },
              { name: "Emily Davis", major: "Biology", grade: "Freshman" },
            ],
            "102": [
              { name: "Sarah Lee", major: "Psychology", grade: "Junior" },
              { name: "David Kim", major: "Mechanical Engineering", grade: "Sophomore" },
              { name: "Olivia Chen", major: "Economics", grade: "Senior" },
              { name: "Ryan Patel", major: "Chemistry", grade: "Freshman" },
            ],
          },
        },
        "2nd Floor": {
          rooms: {
            "201": [
              { name: "Aisha Malik", major: "Political Science", grade: "Junior" },
              { name: "Liam Gonzalez", major: "History", grade: "Sophomore" },
              { name: "Isabella Rossi", major: "Art History", grade: "Senior" },
              { name: "Ethan Tanaka", major: "Physics", grade: "Freshman" },
            ],
            "202": [
              { name: "Sophia Nguyen", major: "Computer Engineering", grade: "Junior" },
              { name: "Noah Patel", major: "Finance", grade: "Sophomore" },
              { name: "Ava Hernandez", major: "Nursing", grade: "Senior" },
              { name: "Lucas Tanaka", major: "Biology", grade: "Freshman" },
            ],
          },
        },
      },
      occupancy: {
        totalOccupancy: 180,
        gradeDistribution: {
          Freshman: 40,
          Sophomore: 50,
          Junior: 60,
          Senior: 30,
        },
        majorDistribution: {
          "Computer Science": 50,
          "Business Administration": 40,
          "Electrical Engineering": 30,
          Biology: 20,
        },
      },
    },
    "Dormitory B": {
      totalBeds: 250,
      floors: {
        "1st Floor": {
          rooms: {
            "101": [
              { name: "Sarah Lee", major: "Psychology", grade: "Junior" },
              { name: "David Kim", major: "Mechanical Engineering", grade: "Sophomore" },
              { name: "Olivia Chen", major: "Economics", grade: "Senior" },
              { name: "Ryan Patel", major: "Chemistry", grade: "Freshman" },
            ],
            "102": [
              { name: "Aisha Malik", major: "Political Science", grade: "Junior" },
              { name: "Liam Gonzalez", major: "History", grade: "Sophomore" },
              { name: "Isabella Rossi", major: "Art History", grade: "Senior" },
              { name: "Ethan Tanaka", major: "Physics", grade: "Freshman" },
            ],
          },
        },
        "2nd Floor": {
          rooms: {
            "201": [
              { name: "Sophia Nguyen", major: "Computer Engineering", grade: "Junior" },
              { name: "Noah Patel", major: "Finance", grade: "Sophomore" },
              { name: "Ava Hernandez", major: "Nursing", grade: "Senior" },
              { name: "Lucas Tanaka", major: "Biology", grade: "Freshman" },
            ],
            "202": [
              { name: "Liam Gonzalez", major: "History", grade: "Junior" },
              { name: "Isabella Rossi", major: "Art History", grade: "Sophomore" },
              { name: "Ethan Tanaka", major: "Physics", grade: "Senior" },
              { name: "Sophia Nguyen", major: "Computer Engineering", grade: "Freshman" },
            ],
          },
        },
      },
      occupancy: {
        totalOccupancy: 220,
        gradeDistribution: {
          Freshman: 50,
          Sophomore: 60,
          Junior: 70,
          Senior: 40,
        },
        majorDistribution: {
          Psychology: 60,
          "Mechanical Engineering": 50,
          Economics: 40,
          Chemistry: 30,
        },
      },
    },
  }
  const handleDormitoryChange = (dormitory) => {
    setSelectedDormitory(dormitory)
    setSelectedFloor(null)
    setSelectedRoom(null)
  }
  const handleFloorChange = (floor) => {
    setSelectedFloor(floor)
    setSelectedRoom(null)
  }
  const handleRoomSelect = (room) => {
    setSelectedRoom(room)
  }
  const toggleVisualData = () => {
    setShowVisualData(!showVisualData)
  }
  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-8 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Dormitory Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Dormitory Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Dormitories</div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold">1,200</div>
                <div className="text-sm text-muted-foreground">Total Capacity</div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold">1,050</div>
                <div className="text-sm text-muted-foreground">Current Occupancy</div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">Select Dormitory</h2>
              <Select value={selectedDormitory} onValueChange={handleDormitoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Dormitory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dormitory A">Dormitory A</SelectItem>
                  <SelectItem value="Dormitory B">Dormitory B</SelectItem>
                  <SelectItem value="Dormitory C">Dormitory C</SelectItem>
                  <SelectItem value="Dormitory D">Dormitory D</SelectItem>
                  <SelectItem value="Dormitory E">Dormitory E</SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Occupancy Details for {selectedDormitory}</h2>
                {showVisualData ? (
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg max-w-[300px] mx-auto">
                      <PiechartChart className="aspect-square" />
                    </div>
                    <div className="bg-muted p-4 rounded-lg max-w-[450px] mx-auto">
                      <BarchartChart className="aspect-[3/2]" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-2xl font-bold">
                        {dormitoryData[selectedDormitory].occupancy.totalOccupancy}
                      </div>
                      <div className="text-sm text-muted-foreground">Current Occupancy</div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(dormitoryData[selectedDormitory].occupancy.gradeDistribution).map(
                        ([grade, count]) => (
                          <div key={grade} className="bg-muted p-4 rounded-lg">
                            <div className="text-2xl font-bold">{count}</div>
                            <div className="text-sm text-muted-foreground">{grade}</div>
                          </div>
                        ),
                      )}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(dormitoryData[selectedDormitory].occupancy.majorDistribution).map(
                        ([major, count]) => (
                          <div key={major} className="bg-muted p-4 rounded-lg">
                            <div className="text-2xl font-bold">{count}</div>
                            <div className="text-sm text-muted-foreground">{major}</div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
                <div className="mt-4 flex justify-end">
                  <Button onClick={toggleVisualData}>{showVisualData ? "Show Text" : "Show Visual"}</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dormitory Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  <div>
                    <h2 className="text-xl font-bold mb-2">Select Floor</h2>
                    <Select value={selectedFloor} onValueChange={handleFloorChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Floor" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(dormitoryData[selectedDormitory].floors).map((floor) => (
                          <SelectItem key={floor} value={floor}>
                            {floor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Select Room</h2>
                    <Select value={selectedRoom} disabled={selectedFloor === null} onValueChange={handleRoomSelect}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Room" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedFloor !== null &&
                          Object.keys(dormitoryData[selectedDormitory].floors[selectedFloor].rooms).map((room) => (
                            <SelectItem key={room} value={room}>
                              {room} (Total Beds:{" "}
                              {Object.keys(dormitoryData[selectedDormitory].floors[selectedFloor].rooms[room]).length},
                              Occupied: {dormitoryData[selectedDormitory].floors[selectedFloor].rooms[room].length})
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {selectedRoom !== null && (
                  <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Room Occupancy</h2>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Major</TableHead>
                          <TableHead>Grade</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dormitoryData[selectedDormitory].floors[selectedFloor].rooms[selectedRoom].map(
                          (student, index) => (
                            <TableRow key={index}>
                              <TableCell>{student.name}</TableCell>
                              <TableCell>{student.major}</TableCell>
                              <TableCell>{student.grade}</TableCell>
                            </TableRow>
                          ),
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function BarchartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}


function PiechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: "Visitors",
          },
          chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
          },
          safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
          },
          firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
          },
          edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
          },
          other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
          },
        }}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}