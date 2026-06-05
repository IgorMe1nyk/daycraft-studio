"use client";

import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

/* ─────────────────────────────────────────────────────────────────────────
   WhyCustomChart — the cost picture.

   Coral bars = the $30/mo builder's CUMULATIVE cost, year over year
   ($360, $720, $1,080, $1,440, $1,800). A full-width soft-blue band + line
   marks the one-time Daycraft build price for the selected tier — the bars
   climb up through and past it.

   Lazy-loaded (next/dynamic, ssr:false) by why-custom.tsx so Recharts stays
   out of the initial bundle and ResponsiveContainer measures a real width.
   ───────────────────────────────────────────────────────────────────── */

const CORAL = "#D97757";
const BLUE = "#6B8CAE";
const CHARCOAL = "#1A1A1A";
const WARMGRAY = "#666666";

const DATA = [1, 2, 3, 4, 5].map((y) => ({
  label: `Year ${y}`,
  year: y,
  cost: 360 * y,
}));

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function WhyCustomChart({
  price,
  years,
}: {
  price: number;
  years: number;
}) {
  // Band thickness scales gently with the price so it reads at every tier.
  const half = Math.max(28, Math.round(price * 0.05));
  const yMax = 1900; // headroom above the $1,800 year-5 bar

  return (
    <div
      role="img"
      aria-label={`Bar chart: a $30/month builder costs ${usd(
        360,
      )} after one year and climbs to ${usd(
        1800,
      )} after five years, while a one-time Daycraft build is ${usd(
        price,
      )}, paid once.`}
      className="w-full"
    >
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={DATA}
          margin={{ top: 28, right: 8, bottom: 4, left: 4 }}
          barCategoryGap="22%"
        >
          {/* Full-width soft-blue band marking the one-time price. No x1/x2 →
              spans the whole plot edge-to-edge (must NOT start at year 1). */}
          <ReferenceArea
            y1={Math.max(0, price - half)}
            y2={price + half}
            fill={BLUE}
            fillOpacity={0.16}
            ifOverflow="visible"
          />
          <ReferenceLine
            y={price}
            stroke={BLUE}
            strokeWidth={2}
            ifOverflow="visible"
            label={{
              value: `Daycraft — paid once · ${usd(price)}`,
              position: "insideTopLeft",
              fill: BLUE,
              fontSize: 11,
              fontWeight: 600,
              dy: -6,
            }}
          />

          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={{ stroke: "rgba(26,26,26,0.12)" }}
            tick={{ fill: WARMGRAY, fontSize: 12 }}
            dy={4}
          />
          <YAxis
            tickFormatter={(v) => usd(Number(v))}
            tickLine={false}
            axisLine={false}
            tick={{ fill: WARMGRAY, fontSize: 11 }}
            width={52}
            domain={[0, yMax]}
          />

          <Bar dataKey="cost" radius={[6, 6, 0, 0]} isAnimationActive={false}>
            {DATA.map((d) => (
              <Cell
                key={d.year}
                fill={CORAL}
                // The selected year is emphasized; the rest show the trajectory.
                fillOpacity={d.year <= years ? 1 : 0.4}
              />
            ))}
            <LabelList
              dataKey="cost"
              position="top"
              formatter={(v) => usd(Number(v ?? 0))}
              style={{ fill: CHARCOAL, fontSize: 11, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
