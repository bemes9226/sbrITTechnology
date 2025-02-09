import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  description: string; // Define the form field type
};

export const DynamicTextareas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      description: "This is the default value", // Set the default value here
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted with:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="description"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description", {
            required: "This field is required", // Validation rule
            minLength: { value: 10, message: "Minimum 10 characters required" },
          })}
          rows={5}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {/* Error message */}
        {errors.description && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.description.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

