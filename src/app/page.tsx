import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import SHEETS from "@/data";

export default function Home() {
  return (
    <main className="max-w-3xl pb-10 px-3 mx-auto text-white">
      <div>
        {SHEETS.map((sheet) => (
          <div className="py-5" key={sheet.id} id={sheet.id}>
            <div>
              <h2 className="font-mono text-3xl font-[900]">{sheet.title}</h2>
              {sheet.subtitle && <h3>{sheet.subtitle}</h3>}
            </div>
            <div>
              {sheet.sections.map((section, i) => (
                <div className="py-3 flex gap-3" key={i}>
                  {section.image && (
                    <div>
                      <Image
                        src={section.image}
                        width={120}
                        height={120}
                        alt={section.title}
                      />
                    </div>
                  )}
                  <div className="w-full">
                    {section.title && <h4>{section.title}</h4>}
                    {section.items.map((item, i) => (
                      <div className="grid grid-cols-[auto_3rem] gap-3" key={i}>
                        <div className="">
                          <p>{item.title}</p>
                          {item.description && (
                            <small>{item.description}</small>
                          )}
                        </div>
                        <div className="">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Menu sheets={SHEETS} />
    </main>
  );
}
