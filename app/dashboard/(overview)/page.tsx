import {
  CardSkeleton,
  ExpenditureChartSkeleton,
  LatestReceiptsSkeleton,
} from "@/components/shared/skeleton";
import { roboto } from "../../../components/shared/fonts";
import { Suspense } from "react";
import StatCardsWrapper from "../stat-cards-wrapper";

export default function Page() {
  return (
    <main>
      <h1 className={`${roboto.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <StatCardsWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ExpenditureChartSkeleton />
        <LatestReceiptsSkeleton />
      </div>
    </main>
  );
}
