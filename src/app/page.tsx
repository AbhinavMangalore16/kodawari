"use client";
import { Authenticated, Unauthenticated, AuthLoading, useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, useAuth, UserProfile } from "@clerk/nextjs";

function AuthenticatedContent() {
  const traces = useQuery(api.traces.get);
  const createVapor = useMutation(api.traces.create);
  
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/4k1.jpg')", // place in /public
      }}
    >
      <div className="glass-card glass-animate flex items-center justify-center">
        <div className="flex items-end gap-6 px-10 py-6">
          {/* Finder */}
          <img
            src="/icons/logo.png"
            alt="Finder"
            className="w-14 h-14 transition-transform duration-300 hover:scale-125"
          />

          {/* Safari */}
          <img
            src="/icons/messages.png"
            alt="Safari"
            className="w-14 h-14 transition-transform duration-300 hover:scale-125"
          />

          {/* Mail */}
          <img
            src="/icons/photos.png"
            alt="Mail"
            className="w-14 h-14 transition-transform duration-300 hover:scale-125"
          />

          {/* Music */}
          <img
            src="/icons/spotify.png"
            alt="Music"
            className="w-14 h-14 transition-transform duration-300 hover:scale-125"
          />

          {/* Settings */}
          <img
            src="/icons/apple-pay.png"
            alt="Settings"
            className="w-14 h-14 transition-transform duration-300 hover:scale-125"
          />
          <img
            src="/icons/youtube.png"
            alt="Settings"
            className="w-14 h-14 transition-transform duration-300 hover:scale-125"
          />
          <img
            src="/icons/slack.png"
            alt="Settings"
            className="w-14 h-14 transition-transform duration-300 hover:scale-125"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <Button onClick={() => createVapor({ name: "Project1" })}>Add</Button>
        {traces === undefined && (
          <div className="text-white opacity-70">Loading traces..</div>
        )}
        {traces?.length === 0 && (
          <div className="text-white opacity-70">No traces yet.</div>
        )}
        {traces?.map((vapor) => (
          <div
            className="border rounded p-2 flex flex-col text-white"
            key={vapor._id}
          >
            <span>{vapor.name}</span>
            <span className="text-xs opacity-70">{vapor.ownerId}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Unauthenticated>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col gap-4 items-center">
            <SignInButton forceRedirectUrl="/" />
            <SignUpButton forceRedirectUrl="/" />
          </div>
        </div>
      </Unauthenticated>
      <AuthLoading>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white opacity-70">Loading...</div>
        </div>
      </AuthLoading>
      <Authenticated>
        <UserProfile/>
        <AuthenticatedContent />
      </Authenticated>
    </>
  );
}
