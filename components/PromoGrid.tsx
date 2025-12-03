import PromoCard from "./PromoCard";

export default function PromoGrid({ promos, onSelect }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {promos.map((promo: any, i: number) => (
        <PromoCard key={i} promo={promo} onSelect={onSelect} />
      ))}
    </div>
  );
}
