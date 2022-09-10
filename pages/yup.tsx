import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

const Yup: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Yup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input type="text" {...register("email")} />
          {errors.email ? <div>{errors.email.message}</div> : null}

          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />
          {errors.password ? <div>{errors.password.message}</div> : null}

          <input type="submit" />
        </form>
      </main>
    </div>
  );
};

export default Yup;
