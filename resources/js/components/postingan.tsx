import React from "react";
import { Head } from "@inertiajs/react";
type PostCardProps = {
    user: string;
    time: string;
    content: string;
  };
export default function PostCard({ user, time, content, }:PostCardProps) {

    return (

      <div className="bg-black rounded-xl p-4 text-white mb-6 border-1 border-white">
          <Head>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
        </Head>
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src="/"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{user}</h3>
            <p className="text-sm text-gray-400">{time}</p>
          </div>
        </div>

        {/* Content */}
        <p className="mb-4 whitespace-pre-line">{content}</p>

        {/* Footer */}
        <div className="flex gap-4 text-gray-400">
          <button className="flex items-center gap-1 hover:text-white">
            <i className="ri-heart-line" />
            <span>1</span>
          </button>
          <button className="flex items-center gap-1 hover:text-white">
            <i className="ri-chat-1-line" />
            <span>1</span>
          </button>
        </div>
      </div>
    );
  }
