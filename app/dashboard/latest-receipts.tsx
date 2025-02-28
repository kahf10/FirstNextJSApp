import { roboto } from "@/components/shared/fonts";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { fetchLatestReciepts } from "@/lib/actions/receipt.actions";
import { cn } from "@/lib/utils";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";

export default async function LatestReceipts() {
  const latestReceipts = await fetchLatestReciepts();

  return (
    <Card className="flex w-full flex-col md:col-span-4">
      <CardHeader>
        <h2 className={`${roboto.className} mb-4 text-xl md:text-2xl`}>
          Latest Receipts
        </h2>
      </CardHeader>
      <CardContent>
        <div>
          <div>
            {latestReceipts.map((receipt, i) => {
              return (
                <div
                  key={receipt.id}
                  className={cn(
                    "flex flex-row items-center justify-between py-4",
                    {
                      "border-t": i !== 0,
                    }
                  )}
                >
                  <div className="flex items-center">
                    <Image
                      src={receipt.image_url}
                      alt={`${receipt.name}'s prifle picture`}
                      className="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                    <div className="min-w-8">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {receipt.name}
                      </p>
                      <p className="hidden text-sm text-gray-500 sm:block">
                        {receipt.email}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${roboto.className} truncate text-sm font-md md:text-base`}
                  >
                    {receipt.amount}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center pb-2 pt-6">
            <RefreshCcw className="h-5 w-5 text-graph-500" />
            <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
