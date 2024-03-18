import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ParamsRegister } from "../../type/api/authType";
import authApi from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

export const RegisterView = () => {
  const cookies = new Cookies();
  const userId = cookies.get("user_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate("/");
    }
  }, [userId]);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ParamsRegister>({
    mode: "onSubmit",
  });

  const mutationRegister = useMutation((params: ParamsRegister) => {
    return authApi.register(params);
  });

  const onUpdate: SubmitHandler<ParamsRegister> = (params) => {
    mutationRegister.mutate(params, {
      onSuccess: () => {
        navigate("/login");
      },
    });
  };
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
            <div className="w-[56px] fullhd:w-[75px] cursor-pointer">
              <img src="/img/facebook.png" alt="" />
            </div>
            <div className="w-[56px] fullhd:w-[75px] cursor-pointer">
              <img src="/img/apple.png" alt="" />
            </div>
            <div className="w-[56px] fullhd:w-[75px] cursor-pointer">
              <img src="/img/google.png" alt="" />
            </div>
          </div>
          <p className="font-bold text-[18px] text-gray-1 mt-[20.5px]">or</p>
          <Form
            name="update"
            layout="vertical"
            onFinish={handleSubmit(onUpdate)}
            autoComplete="off"
          >
            <div className="mt-6 flex flex-col w-[350px]">
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={
                  <p className="text-[14px] font-medium leading-5">User Name</p>
                }
                rules={[
                  { required: true, message: "Please input your banner name!" },
                ]}
              >
                <Controller
                  name="User_Name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="user-input"
                      placeholder="Your username"
                    />
                  )}
                />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={
                  <p className="text-[14px] font-medium leading-5">Password</p>
                }
                rules={[
                  { required: true, message: "Please input your banner name!" },
                ]}
              >
                <Controller
                  name="Password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      className="user-input"
                      placeholder="Your password"
                    />
                  )}
                />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={
                  <p className="text-[14px] font-medium leading-5">Full Name</p>
                }
                rules={[
                  { required: true, message: "Please input your banner name!" },
                ]}
              >
                <Controller
                  name="Full_Name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      className="user-input"
                      placeholder="Your full name"
                    />
                  )}
                />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={
                  <p className="text-[14px] font-medium leading-5">Email</p>
                }
                rules={[
                  { required: true, message: "Please input your banner name!" },
                ]}
              >
                <Controller
                  name="Email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      className="user-input"
                      placeholder="Your email"
                    />
                  )}
                />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={
                  <p className="text-[14px] font-medium leading-5">Phone</p>
                }
                rules={[
                  { required: true, message: "Please input your banner name!" },
                ]}
              >
                <Controller
                  name="Phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      className="user-input"
                      placeholder="Your phone number"
                    />
                  )}
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-[350px] h-[50px] mt-6"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="text-gray-1 text-[14px]">
          Already have an account?{" "}
          <span
            className="cursor-pointer font-bold"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};
