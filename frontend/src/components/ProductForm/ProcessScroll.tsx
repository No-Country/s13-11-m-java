import { ScrollArea } from "@/components/ui/scroll-area";

interface Proceso {
  name: string;
  timeframe: number;
  progress: number;
  estimatedTime: number;
  status: string;
  subProcess?: Proceso[];
}

const ProcessScroll = ({ procesos }: { procesos: Proceso[] }) => {
  return (
    <ScrollArea className="mb-4 h-60 whitespace-nowrap rounded-md border">
      <div className="p-4 pr-0">
        {procesos.map((proceso, i) => (
          <>
            <div
              key={i}
              className="h-[57px] w-[360px] rounded-none border border-[#D5D5D5] bg-[#F5F6FA]  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
            >
              {proceso.name}
            </div>
            <ScrollArea className="rounded-md border">
              <div className="p-4 pr-0">
                {proceso.subProcess!.map((subProceso: Proceso, i) => (
                  <>
                    <div
                      key={i}
                      className="h-[57px] w-[300px] rounded-none border border-[#D5D5D5] bg-[#F5F6FA]  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                    >
                      {subProceso.name}
                    </div>
                  </>
                ))}
              </div>
            </ScrollArea>
          </>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ProcessScroll;
