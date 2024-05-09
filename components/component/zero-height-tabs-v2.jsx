/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/oWHA6BBA1wm
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ZeroHeightTabsV2() {
  return (
    (<main key="1" className="w-full max-w-6xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-8">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">In which phase you want to start?</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Select a phase of the unified branding experience to get started.
          </p>
        </div>
        <Tabs className="w-full" defaultValue="featured">
          <TabsList
            className="flex gap-2 bg-white dark:border-gray-800 pb-8 justify-start">
            <TabsTrigger
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 dark:data-[state=active]:border-gray-50"
              value="featured">
              Phase 1
            </TabsTrigger>
            <TabsTrigger
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 dark:data-[state=active]:border-gray-50"
              value="newest">
              Phase 2
            </TabsTrigger>
            <TabsTrigger
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 dark:data-[state=active]:border-gray-50"
              value="sale">
              Phase 3
            </TabsTrigger>
          </TabsList>
          <TabsContent value="featured">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Login page</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Elevate your workspace with our cutting-edge ergonomic desk chair, designed for ultimate comfort and
                    support.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Branding</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Effortlessly charge your devices with our sleek and convenient wireless charging pad.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Bran</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Elevate your home with our cutting-edge smart home assistant, offering seamless control and
                    automation.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Accesibility</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Experience unparalleled audio immersion with our premium noise-cancelling headphones.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="newest">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Portable Bluetooth Speaker</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Enjoy high-quality audio on the go with our compact and powerful Bluetooth speaker.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Fitness Tracker Watch</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Stay on top of your fitness goals with our advanced fitness tracker watch.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Smart LED Light Bulb</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Transform your home with our cutting-edge smart LED light bulbs, offering endless customization.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Wireless Charging Station</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Streamline your charging with our versatile wireless charging station, compatible with multiple
                    devices.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sale">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Cordless Vacuum Cleaner</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Experience the ultimate in cleaning convenience with our powerful cordless vacuum cleaner.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Smart Air Purifier</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Breathe easy with our advanced smart air purifier, keeping your indoor air clean and fresh.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Robotic Lawn Mower</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Effortlessly maintain your lawn with our cutting-edge robotic lawn mower, perfect for busy
                    homeowners.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View product</span>
                </Link>
                <img
                  alt="Product image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={450}
                  src="/placeholder.svg"
                  width={450} />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Smart Home Security Camera</h3>
                  <p
                    className="text-sm leading-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    Enhance your home security with our advanced smart home security camera, offering 24/7 monitoring.
                  </p>
                  <div className="mt-4">
                    <Button size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>)
  );
}
