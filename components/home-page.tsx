import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Sidebar from "./sidebar"
import Nav from "./nav"

export function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <Nav />
      <div className="flex flex-1 gap-8 p-4 sm:p-6">
        <Sidebar />
        <div className="flex-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/tasks/1" prefetch={false}>
            <Card>
              <CardHeader>
                <CardTitle>Design a new website</CardTitle>
                <CardDescription>Create a modern and responsive website for a small business.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Due by June 30</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Apply</Button>
              </CardFooter>
            </Card>
          </Link>
          <Link href="#" prefetch={false}>
            <Card>
              <CardHeader>
                <CardTitle>Write blog posts</CardTitle>
                <CardDescription>Produce high-quality blog content on a variety of topics.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  <span>New York, NY</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Due by July 15</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Apply</Button>
              </CardFooter>
            </Card>
          </Link>
          <Link href="#" prefetch={false}>
            <Card>
              <CardHeader>
                <CardTitle>Develop a mobile app</CardTitle>
                <CardDescription>Build a cross-platform mobile app using React Native.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Due by September 1</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Apply</Button>
              </CardFooter>
            </Card>
          </Link>
          <Link href="#" prefetch={false}>
            <Card>
              <CardHeader>
                <CardTitle>Create marketing materials</CardTitle>
                <CardDescription>Design and produce brochures, flyers, and other marketing collateral.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  <span>London, UK</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Due by August 31</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Apply</Button>
              </CardFooter>
            </Card>
          </Link>
          <Link href="#" prefetch={false}>
            <Card>
              <CardHeader>
                <CardTitle>Edit video content</CardTitle>
                <CardDescription>Review and edit video footage for a corporate video project.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Due by October 1</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Apply</Button>
              </CardFooter>
            </Card>
          </Link>
          <Link href="#" prefetch={false}>
            <Card>
              <CardHeader>
                <CardTitle>Translate website content</CardTitle>
                <CardDescription>Translate website content from English to Spanish and French.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Due by November 15</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Apply</Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
