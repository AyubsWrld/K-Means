import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export const metadata = {
  title: "K-Means - Route Optimization Service",
  description: "comprehensive route optimization and delivery management system designed to streamline the assignment of delivery tasks to drivers.",
};

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-5xl font-bold mb-4 sm:text-7xl">
       K-Means 
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
        System Design Documentation 
      </h1>
      <p className="mb-8 sm:text-md max-w-[800px] text-muted-foreground">
        comprehensive route optimization and delivery management system designed to streamline the assignment of delivery tasks to drivers.
      </p>
      <div>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({
            className: "px-6 !font-medium",
            size: "lg",
          })}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

