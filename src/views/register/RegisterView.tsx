import { Button, Input } from "antd";
import React from "react";

export const RegisterView = () => {
  return (
    <div className="w-full h-full min-h-[100vh] flex bg-[#0F123B]">
      <div className="w-[56%] relative">
        <div className="w-full h-full">
          <img src="/img/main-background.png" alt="" />
        </div>
        <div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
          <p className="text-[20px]">INSPIRED BY THE FUTURE</p>
          <p className="text-[36px] font-bold tracking-[18%] mt-4">
            THE VISION UI DASHBOARD
          </p>
        </div>
      </div>
      <div className="w-[44%] flex flex-col items-center justify-center p-12">
        <div className="text-center">
          <p className="text-[30px]">Welcome!</p>
          <p className="text-[14px] leading-6 mt-[11.5px] max-w-[300px]">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
        <div className="flex flex-col items-center mt-6">
          <p className="font-bold text-[18px]">Register with</p>
          <div className="flex gap-x-[15px] mt-6">
            <div className="w-[75px] cursor-pointer">
              <img src="/img/facebook.png" alt="" />
            </div>
            <div className="w-[75px] cursor-pointer">
              <img src="/img/apple.png" alt="" />
            </div>
            <div className="w-[75px] cursor-pointer">
              <img src="/img/google.png" alt="" />
            </div>
          </div>
          <p className="font-bold text-[18px] text-gray-1 mt-[20.5px]">or</p>
          <div className="mt-6 flex flex-col gap-y-6 w-[350px]">
            <div>
              <p className="text-[14px] font-medium leading-5 mb-[5px]">Name</p>
              <Input className="user-input" placeholder="Your full name" />
            </div>
            <div>
              <p className="text-[14px] font-medium leading-5 mb-[5px]">
                Password
              </p>
              <Input
                type="password"
                className="user-input"
                placeholder="Your password"
              />
            </div>
            <div>
              <p className="text-[14px] font-medium leading-5 mb-[5px]">
                Country
              </p>
              <Input className="user-input" placeholder="Your country" />
            </div>
            <div>
              <p className="text-[14px] font-medium leading-5 mb-[5px]">
                Phone
              </p>
              <Input className="user-input" placeholder="Your phone" />
            </div>
            <div>
              <p className="text-[14px] font-medium leading-5 mb-[5px]">
                Email
              </p>
              <Input className="user-input" placeholder="Your email" />
            </div>
          </div>
        </div>
        <Button type="primary" className="w-[350px] h-[50px] mt-6">
          Sign Up
        </Button>
        <div className="text-gray-1 text-[14px] mt-6">
          Already have an account?{" "}
          <span className="cursor-pointer font-bold">Sign in</span>
        </div>
      </div>
    </div>
  );
};
