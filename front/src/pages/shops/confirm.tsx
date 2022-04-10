import type { NextPage } from "next";
import { useRouter } from "next/router";
import { RequiredMark } from "../../components/RequiredMark";

const Post: NextPage = () => {
  const router = useRouter();

  return (
    <div className="w-2/3 mx-auto">
      <div className="w-1/2 mx-auto mt-32 border-2 px-12 py-16 rounded-2xl">
        <h3 className="mb-10 text-2xl text-center">レビューの登録</h3>
        <form method="POST" action="/shops/complete">
          <div className="mb-5">
            <div className="flex justify-start my-2">
              <p>タイトル</p>
              <RequiredMark />
            </div>
            <input
              className="p-2 border rounded-md w-full outline-none"
              name="title"
            />
          </div>
          <div className="mb-5">
            <div className="flex justify-start my-2">
              <p>ご意見</p>
              <RequiredMark />
            </div>
            <textarea
              className="p-2 border rounded-md w-full outline-none"
              name="body"
              cols={30}
              rows={4}
            />
          </div>
          <div className="text-center">
            <button
              className="bg-gray-700 text-gray-50 py-3 sm:px-20 px-10 mt-8 rounded-xl cursor-pointer drop-shadow-md hover:bg-gray-600"
              onClick={() => router.push("/shops/post")}
            >
              入力画面へ戻る
            </button>
            <button className="bg-gray-700 text-gray-50 py-3 sm:px-20 px-10 mt-8 rounded-xl cursor-pointer drop-shadow-md hover:bg-gray-600">
              送信する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
