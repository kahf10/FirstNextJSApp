import { roboto } from "@/components/shared/fonts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { fetchCardData } from "@/lib/actions/receipt.actions";
import {
  BanknoteIcon,
  Clock10Icon,
  ReceiptIcon,
  ShoppingBagIcon,
} from "lucide-react";

const iconMap = {
  paid: BanknoteIcon,
  vendors: ShoppingBagIcon,
  pending: Clock10Icon,
  receipts: ReceiptIcon,
};

export function StatCard({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "receipts" | "vendors" | "paid" | "pending";
}) {
  const Icon = iconMap[type];

  return (
    <Card>
      <CardHeader className="flex flex-row space-y-0 space-x-3">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className={`${roboto.className} truncate roudned-xl p-4 text-2xl`}>
          {value}
        </p>
      </CardContent>
    </Card>
  );
}

export default async function StatCardsWrapper() {
  const {
    numberOfReceipts,
    numberOfVendors,
    totalPaidReceipts,
    totalPendingReceipts,
  } = await fetchCardData();

  return (
    <>
      <StatCard title="Paid" value={totalPaidReceipts} type="paid" />
      <StatCard title="Pending" value={totalPendingReceipts} type="pending" />
      <StatCard
        title="Total Receipts"
        value={numberOfReceipts}
        type="receipts"
      />
      <StatCard title="Total Vendors" value={numberOfVendors} type="vendors" />
    </>
  );
}
