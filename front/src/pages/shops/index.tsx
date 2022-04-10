import type { NextPage } from "next";
import { useRouter } from "next/router";

type Shop = {
  name: string;
  description: string;
};

const tempShops: Shop[] = [
  {
    name: "和食",
    description: "テキストテキストテキストテキストテキスト",
  },
  {
    name: "洋食",
    description: "テキストテキストテキストテキストテキスト",
  },
  {
    name: "中華",
    description: "テキストテキストテキストテキストテキスト",
  },
  {
    name: "イタリアン",
    description: "テキストテキストテキストテキストテキスト",
  },
  {
    name: "フレンチ",
    description: "テキストテキストテキストテキストテキスト",
  },
];

const Shop: NextPage = () => {
  const router = useRouter();

  return (
    <div className="w-2/3 mx-auto mt-32">
      <div className="w-1/2 mx-auto text-center">
        {/* <button
          className="text-xl mb-12 py-3 px-10 bg-blue-500 text-white rounded-3xl drop-shadow-md hover:bg-blue-400"
          onClick={() => router.push("/memos/post")}
        >
          メモを追加する
        </button> */}
      </div>
      <div className="mt-3">
        {/* 仮データでの一覧表示 */}
        <div className="grid w-2/3 mx-auto gap-4 grid-cols-2">
          {tempShops.map((shop: Shop, index) => {
            return (
              <div className="shadow-lg mb-5 p-4" key={index}>
                <p className="text-lg font-bold mb-1">{shop.name}</p>
                <p className="">{shop.description}</p>
                <button
                  className="bg-gray-700 text-gray-50 py-3 sm:px-20 px-10 rounded-xl cursor-pointer drop-shadow-md hover:bg-gray-600"
                  onClick={() => router.push("shops/post")}
                >
                  レビューする
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
