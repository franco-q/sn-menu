import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import SHEETS from "@/data";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactPortal,
} from "react";

type Sheet = {
  sections: any;
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

type Section = {
  title: string | Element;
  subtitle?: string | Element;
  image?: string;
  items: any[];
};

type Item = {
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
  value:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
};

export default function Home() {
  return (
    <main className="max-w-3xl pb-10 px-3 mx-auto text-white">
      <div>
        {SHEETS.map((sheet: Sheet) => (
          <div className="py-5" key={sheet.id} id={sheet.id}>
            <div>
              <h2 className="font-mono text-3xl font-[900]">{sheet.title}</h2>
              {sheet.subtitle && <h3>{sheet.subtitle}</h3>}
            </div>
            <div>
              {sheet.sections.map((section: any, i: Key | null | undefined) => (
                <div className="py-3 flex gap-3" key={i}>
                  {section.image && (
                    <div>
                      <Image
                        src={section.image.src}
                        width={120}
                        height={120}
                        alt={section.image.alt}
                      />
                    </div>
                  )}
                  <div className="w-full">
                    {section.title && <h4>{section.title}</h4>}
                    {section.items.map(
                      (item: Item, i: Key | null | undefined) => (
                        <div
                          className="grid grid-cols-[auto_3rem] gap-3"
                          key={i}
                        >
                          <div className="">
                            <p>{item.title}</p>
                            {item.description && (
                              <small>{item.description}</small>
                            )}
                          </div>
                          <div className="">{item.value}</div>
                        </div>
                      )
                    )}
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
