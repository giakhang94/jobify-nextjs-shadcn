"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  CreateAndEditJobType,
} from "@/utils/types";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CustomFormField, CustomFormSelect } from "./FormComponent";

function CreateJobForm() {
  // 1. Define your form.
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

  function onSubmit(values: CreateAndEditJobType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        action=""
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-xl mb-6">add job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/*position */}
          <CustomFormField name="position" control={form.control} />
          {/*company */}
          <CustomFormField name="company" control={form.control} />
          {/*Location */}
          <CustomFormField name="location" control={form.control} />
          {/* Job status */}
          <CustomFormSelect
            name="status"
            control={form.control}
            labelText="Job Status"
            items={Object.values(JobStatus)}
          />
          {/* Job mode */}
          <CustomFormSelect
            name="mode"
            control={form.control}
            labelText="Job Mode"
            items={Object.values(JobMode)}
          />
          <Button type="submit" className="self-end capitalize">
            Create Job
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default CreateJobForm;
