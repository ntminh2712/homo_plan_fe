import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ParamsLogin } from "../../type/api/authType";
import { useMutation } from "react-query";
import authApi from "../../api/authApi";
import { addCookie } from "../../utils/addCookie";
import Cookies from "universal-cookie";
import { useLoading } from "../../hooks/useLoading";

export const LoginView = () => {
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
  } = useForm<ParamsLogin>({
    mode: "onSubmit",
  });

  const mutationRegister = useMutation((params: ParamsLogin) => {
    return authApi.login(params);
  });

  const onUpdate: SubmitHandler<ParamsLogin> = (params) => {
    mutationRegister.mutate(params, {
      onSuccess: (res: any) => {
        addCookie(res.data);
        navigate("/");
      },
    });
  };

  useLoading(mutationRegister.isLoading);
  return (
    <>
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
            <p className="text-[30px]">Nice to see you!</p>
            <p className="text-[14px] leading-6 mt-[11.5px] max-w-[300px]">
              Enter your email and password to sign in
            </p>
          </div>
          <Form
            name="update"
            layout="vertical"
            onFinish={handleSubmit(onUpdate)}
            autoComplete="off"
          >
            <div className="flex flex-col items-center mt-6">
              <div className="mt-6 flex flex-col w-[350px]">
                <Form.Item
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  label={
                    <p className="text-[14px] font-medium leading-5">
                      User Name
                    </p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your banner name!",
                    },
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
                    <p className="text-[14px] font-medium leading-5">
                      User Name
                    </p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your banner name!",
                    },
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
                        placeholder="Your username"
                        autoComplete="off"
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
                  Login
                </Button>
              </Form.Item>
            </div>
          </Form>

          <div className="text-gray-1 text-[14px]">
            Don't have an account?{" "}
            <span
              className="cursor-pointer font-bold"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
