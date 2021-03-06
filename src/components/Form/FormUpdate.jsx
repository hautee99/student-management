import React from "react";

const FormUpdate = ({
  handleSubmit,
  onUpdate,
  value,
  register,
  errors,
  isSubmitting,
  handleUpdateValue,
}) => {
  return (
    <div className="py-2">
      <h1 className="text-xl font-bold text-center">UPDATE STUDENTS</h1>
      <form
        onSubmit={handleSubmit(onUpdate)}
        className="p-5 w-full max-w-[500px] mx-auto h-full"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2 mb-1">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            placeholder="Enter student ID"
            defaultValue={value}
            className="p-2 rounded-md bg-gray-100 border border-gray-100"
            {...register("id")}
          />
          {errors?.id && (
            <div className="text-red-500 text-sm">{errors.id?.message}</div>
          )}
        </div>
        <div className="flex flex-col  mb-1">
          <label htmlFor="id">AVATAR</label>
          <input type="file" alt="" id="image" {...register("image")} />
        </div>
        <div className="flex flex-col  mb-1">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter fullname"
            defaultValue={value}
            className="p-2 rounded-md bg-gray-100 border border-gray-100"
            {...register("fullName")}
          />
        </div>
        {errors?.fullName && (
          <div className="text-red-500 text-sm">{errors.fullName?.message}</div>
        )}
        <div className="flex flex-col  mb-1">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            defaultValue={value}
            className="p-2 rounded-md bg-gray-100 border border-gray-100"
            {...register("address")}
          />
        </div>
        {errors?.address && (
          <div className="text-red-500 text-sm">{errors.address?.message}</div>
        )}
        <div className="flex flex-col  mb-1">
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            placeholder="Enter phone"
            defaultValue={value}
            className="p-2 rounded-md bg-gray-100 border border-gray-100"
            {...register("phone")}
          />
        </div>
        {errors?.phone && (
          <div className="text-red-500 text-sm">{errors.phone?.message}</div>
        )}
        <div className="flex flex-col  mb-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            defaultValue={value}
            className="p-2 rounded-md bg-gray-100 border border-gray-100"
            {...register("email")}
          />
        </div>
        {errors?.email && (
          <div className="text-red-500 text-sm">{errors.email?.message}</div>
        )}
        <div className="flex flex-col  mb-5">
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
    </div>
  );
};

export default FormUpdate;
