import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import ProtectedRoute from "../../src/components/authCheck/ProtectedRoute";
import { currentUser } from "../../src/components/helper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import Cookies from "universal-cookie";
import { wrapper } from "../../src/redux/store";
import HeaderLayout from "../../src/components/Layouts/HeaderLayout";
const Signup = (props) => {
  const router = useRouter();
  const cookie = new Cookies();
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  const schema = yup
    .object({
      email: yup.string().required("Email is Required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    cookie.set("isLogin", true, { path: "/" });
    router.query.next ? router.push(router.query.next) : router.push("/");
  };

  return (
    <HeaderLayout>
      <div className="container-fluid">
        <h3>Renders: {renderCounter.current}</h3>
        <div className=" mt-5 d-flex justify-content-center align-items-center">
          <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
            <h2 className="text-center mb-4 text-primary">Signup Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="form-control border border-primary"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  aria-describedby="emailHelp"
                  name="email"
                />
                {errors.email && touchedFields.email && (
                  <p className="text-danger" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  className="form-control border border-primary"
                  placeholder="Password"
                  id="exampleInputPassword1"
                  name="password"
                />
                {errors.password && touchedFields.password && (
                  <p className="text-danger" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <p className="small">
                <a className="text-primary" href="forget-password.html">
                  Forgot password?
                </a>
              </p>
              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  console.log("inside getStaticProps.. store.dispatch");
  console.log(ctx.req.headers.cookie.includes("isLogin"), "aslkiub");
  if (ctx.req.headers.cookie.includes("isLogin")) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
});
export default Signup;
