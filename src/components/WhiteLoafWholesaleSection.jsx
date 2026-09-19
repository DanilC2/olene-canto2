import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Wheat, Store, Truck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhiteLoafWholesaleSection() {
  return (
    <section id="white-loaf" className="border-y border-zinc-200 bg-white text-zinc-900 overflow-hidden">
      <ScrollReveal className="px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:gap-20 lg:grid-cols-[0.9fr_1.1fr] items-start lg:items-center">
            <div className="space-y-5 sm:space-y-6 md:space-y-7 text-center lg:text-left">
              <div className="flex w-full justify-center lg:justify-start">
                <div className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[22rem] rounded-xl bg-zinc-50/80 p-3 sm:p-4 md:p-5 flex items-center justify-center shadow-sm ring-1 ring-zinc-200">
                  <Image
                    src="/whieloaf2.png"
                    alt="White Loaf Craft Bakers logo"
                    width={2826}
                    height={1504}
                    className="h-auto w-full max-h-[120px] sm:max-h-[160px] md:max-h-[200px] object-contain"
                    style={{ backgroundColor: "#ffffff" }}
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#9b722b]">
                  Olene Foods Wholesale
                </p>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-zinc-900">
                  Everyday baking, made better.
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-zinc-700 max-w-xl mx-auto lg:mx-0">
                White Loaf is our dedicated wholesale bakery brand, bringing dependable, fresh bread and cookies to supermarkets, hypermarkets, and retail partners.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8 lg:border-l-2 lg:border-[#d9b578] lg:pl-6">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#9b722b]">
                  Our concept
                </p>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-medium text-zinc-900">
                  Specialized traditional bakery with a clearly defined value system.
                </h3>
                <p className="text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-zinc-700">
                  We make accessible bakery staples with the care and consistency of an artisan kitchen, supporting retailers with reliable products, presentation, and service.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="border-t border-zinc-200 pt-4">
                  <Store className="h-4 w-4 sm:h-5 sm:w-5 text-[#9b722b]" />
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-zinc-900">Retail ready</p>
                  <p className="mt-1 text-[10px] sm:text-xs leading-5 text-zinc-600">Products built for modern shelves and counters.</p>
                </div>
                <div className="border-t border-zinc-200 pt-4">
                  <Wheat className="h-4 w-4 sm:h-5 sm:w-5 text-[#9b722b]" />
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-zinc-900">Pure ingredients</p>
                  <p className="mt-1 text-[10px] sm:text-xs leading-5 text-zinc-600">Familiar recipes made with thoughtful sourcing.</p>
                </div>
                <div className="border-t border-zinc-200 pt-4">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-[#9b722b]" />
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-zinc-900">Partner support</p>
                  <p className="mt-1 text-[10px] sm:text-xs leading-5 text-zinc-600">Distribution and merchandising support for growth.</p>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <Link
                  href="/contact?type=wholesale"
                  className="inline-flex items-center gap-2 bg-zinc-900 px-4 sm:px-6 py-2 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-white transition-colors hover:bg-[#9b722b]"
                >
                  Discuss wholesale partnership <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
