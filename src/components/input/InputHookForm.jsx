import React, { useEffect, useState } from "react";
const InputHookForm = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  isSubmitting,
  value,
}) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 w-full max-w-[500px] mx-auto h-full"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          placeholder="Enter your first name"
          defaultValue={value}
          className="p-2 rounded-md bg-gray-100 border border-gray-100"
          {...register("id")}
        />
        {errors?.id && (
          <div className="text-red-500 text-sm">{errors.id?.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your first name"
          defaultValue={value}
          className="p-2 rounded-md bg-gray-100 border border-gray-100"
          {...register("fullName")}
        />
      </div>
      {errors?.fullName && (
        <div className="text-red-500 text-sm">{errors.fullName?.message}</div>
      )}
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your first name"
          defaultValue={value}
          className="p-2 rounded-md bg-gray-100 border border-gray-100"
          {...register("address")}
        />
      </div>
      {errors?.address && (
        <div className="text-red-500 text-sm">{errors.address?.message}</div>
      )}
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          placeholder="Enter your first name"
          defaultValue={value}
          className="p-2 rounded-md bg-gray-100 border border-gray-100"
          {...register("phone")}
        />
      </div>
      {errors?.phone && (
        <div className="text-red-500 text-sm">{errors.phone?.message}</div>
      )}
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          defaultValue={value}
          className="p-2 rounded-md bg-gray-100 border border-gray-100"
          {...register("email")}
        />
      </div>
      {errors?.email && (
        <div className="text-red-500 text-sm">{errors.email?.message}</div>
      )}
      <div className="flex flex-col gap-2 mb-3"></div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default InputHookForm;
