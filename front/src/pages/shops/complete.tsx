import type { NextPage } from "next";
import { useRouter } from "next/router";
import { RequiredMark } from "../../components/RequiredMark";

const Post: NextPage = () => {
  const router = useRouter();

  return (
    <div className="w-2/3 mx-auto">
      <div className="w-1/2 mx-auto mt-32 border-2 px-12 py-16 rounded-2xl">
        <h3 className="mb-10 text-2xl text-center">レビューの登録</h3>
        <div>レビュー送信ありがとうございました。</div>
      </div>
    </div>
  );
};

export default Post;
