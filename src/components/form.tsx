import React from 'react';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const form = () => {
  const schema = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    dob: z.string().min(5).max(30),
    age: z.number().min(4).max(12),
    grade: z.number().max(8),
    pronouns: z.string(),
    groupPreferences: z.string(),
    epipen: z.boolean().optional(),
    medicalIssues: z.string(),
    emergencyContactFirstName: z.string().min(2).max(30),
    emergencyContactLastName: z.string().min(2).max(30),
    emergencyContactPhoneNumber: z.string().min(10).max(14),
    doctorContactFirstName: z.string().min(2).max(30),
    doctorContactLastName: z.string().min(2).max(30),
    doctorContactPhoneNumber: z.string().min(10).max(14),
    independentSignOut: z.boolean().optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const url = 'https://scotts197.sg-host.com/test.php';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'hello',
    }).then(async (res) => {
      console.log(await res.text());
    });
    console.log(data);
  };

  //   const { handleSubmit } = useForm();
  //   const secondSubmit = (data) => console.log(data);

  return (
    <>
      <form
        name="registration form"
        className="w-full"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-2xl font-bold mb-10">Tell us about your camper(s)</p>

        <div className="flex px-2 flex-col md:grid gap-6 mb-6 grid-cols-1 md:grid-cols-6 w-full">
          <p className="md:col-span-6 font-bold -mb-4">General information</p>
          <div className="col-span-3 relative">
            <input
              type="text"
              {...register('firstName')}
              id="first_name"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="first_name"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              First Name
            </label>
            {errors.firstName && (
              <span className="text-red">{errors.firstName.message}</span>
            )}
          </div>
          <div className="md:col-span-3 relative">
            <input
              type="text"
              {...register('lastName')}
              id="last_name"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="last_name"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Last Name
            </label>
            {errors.lastName && (
              <span className="text-red">{errors.lastName.message}</span>
            )}
          </div>
          <div className="md:col-span-2 relative">
            <input
              type="text"
              {...register('dob')}
              id="date_of_birth"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="date_of_birth"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Date of Birth
            </label>
            {errors.dob && (
              <span className="text-red">{errors.dob.message}</span>
            )}
          </div>
          <div className="md:col-span-2 relative">
            <input
              type="number"
              {...register('age', { valueAsNumber: true })}
              id="age"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="age"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Age
            </label>
            {errors.age && (
              <span className="text-red">{errors.age.message}</span>
            )}
          </div>
          <div className="md:col-span-2 relative">
            <input
              type="number"
              {...register('grade', { valueAsNumber: true })}
              id="grade"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="grade"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Grade in June 2023
            </label>
            {errors.grade && (
              <span className="text-red">{errors.grade.message}</span>
            )}
          </div>

          <p className="col-span-6 font-bold -mb-4">Perferred Pronouns</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-20">
            <div className="flex items-center">
              <input
                id="she-her"
                {...register('pronouns')}
                type="radio"
                value=" She/Her"
                name="pronouns"
                className="w-5 h-5 text-blue-300 bg-white border-blue-border focus:blue-300   focus:ring-2 "
              />
              <label htmlFor="she-her" className="ml-2 font-medium ">
                She/Her
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="he-him"
                {...register('pronouns')}
                type="radio"
                value="He/Him"
                name="pronouns"
                className="w-5 h-5 text-blue-300 bg-white border-blue-border focus:blue-300   focus:ring-2 "
              />
              <label htmlFor="he-him" className="ml-2  font-medium ">
                He/Him
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="they-them"
                {...register('pronouns')}
                type="radio"
                value="They/Them"
                name="pronouns"
                className="w-5 h-5 text-blue-300 bg-white border-blue-border focus:blue-300   focus:ring-2 "
              />
              <label htmlFor="they-them" className="ml-2  font-medium ">
                They/Them
              </label>
            </div>
            {errors.pronouns && (
              <span className="text-red">{errors.pronouns.message}</span>
            )}
          </div>

          <label
            className="col-span-6 font-bold -mb-4"
            htmlFor="group-preferences"
          >
            Group preferences
          </label>
          <textarea
            {...register('groupPreferences')}
            id="group-preferences"
            placeholder="If possible, please put my child in a group with...."
            className="w-full col-span-6 bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block  h-18 px-2.5 py-3.5 placeholder:text-blue-placeholder resize-y"
          ></textarea>
          {errors.grade && (
            <span className="text-red">{errors.groupPreferences?.message}</span>
          )}

          <label
            className="col-span-6 font-bold -mb-4"
            htmlFor="medical-issues"
          >
            Please identify any issues, medical conditions, allergies, special
            needs which Camp Emmanuel staff should be made aware of
          </label>

          <textarea
            {...register('medicalIssues')}
            id="medical-issues"
            placeholder="My camper..."
            className="w-full col-span-6 bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block  h-18 px-2.5 py-3.5 placeholder:text-blue-placeholder resize-y"
          ></textarea>
          {errors.grade && (
            <span className="text-red">{errors.medicalIssues?.message}</span>
          )}

          <p className="col-span-6 font-bold  -mb-4">My Camper has an Epipen</p>
          <div className="flex items-center">
            <input
              id="checked-checkbox"
              {...register('epipen')}
              name="Epipen"
              type="checkbox"
              className="w-5 h-5 text-blue-00 bg-white border-blue-border rounded-full focus:blue-300   focus:ring-2 "
            />
            <label htmlFor="checked-checkbox" className="ml-2 ">
              Yes
            </label>
            {errors.epipen && (
              <span className="text-red">{errors.epipen.message}</span>
            )}
          </div>

          <p className="col-span-6 font-bold -mb-4">
            Contact information of person in posseion of child’s Health
            Insurance information/card
          </p>
          <div className="col-span-2 relative">
            <input
              type="text"
              {...register('emergencyContactFirstName')}
              id="emergency_first_name"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="emergency_first_name"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              First Name
            </label>
            {errors.emergencyContactFirstName && (
              <span className="text-red">
                {errors.emergencyContactFirstName.message}
              </span>
            )}
          </div>
          <div className="col-span-2 relative">
            <input
              type="text"
              {...register('emergencyContactLastName')}
              id="emergency_last_name"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="emergency_last_name"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Last Name
            </label>
            {errors.emergencyContactLastName && (
              <span className="text-red">
                {errors.emergencyContactLastName.message}
              </span>
            )}
          </div>
          <div className="col-span-2 relative">
            <input
              type="tel"
              {...register('emergencyContactPhoneNumber')}
              id="emergency_phone_number"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="emergency_phone_number"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Phone Number
            </label>
            {errors.emergencyContactPhoneNumber && (
              <span className="text-red">
                {errors.emergencyContactPhoneNumber.message}
              </span>
            )}
          </div>

          <p className="col-span-6 font-bold -mb-4">
            Contact information of Doctor
          </p>
          <div className="col-span-2 relative">
            <input
              type="text"
              {...register('doctorContactFirstName')}
              id="doctor_first_name"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />

            <label
              htmlFor="doctor_first_name"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              First Name
            </label>
            {errors.doctorContactFirstName && (
              <span className="text-red">
                {errors.doctorContactFirstName.message}
              </span>
            )}
          </div>
          <div className="col-span-2 relative">
            <input
              type="text"
              {...register('doctorContactLastName')}
              id="doctor_last_name"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="doctor_last_name"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Last Name
            </label>
            {errors.doctorContactLastName && (
              <span className="text-red">
                {errors.doctorContactLastName.message}
              </span>
            )}
          </div>
          <div className="col-span-2 relative">
            <input
              type="tel"
              {...register('doctorContactPhoneNumber')}
              id="doctor_phone_number"
              className="bg-white border border-blue-border text-gray-900  rounded-lg  focus:blue-500 block w-full px-2.5 py-3.5 placeholder:text-blue-placeholder peer "
              placeholder=" "
            />
            <label
              htmlFor="doctor_phone_number"
              className="absolute  text-blue-placeholder  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Phone Number
            </label>
            {errors.doctorContactPhoneNumber && (
              <span className="text-red">
                {errors.doctorContactPhoneNumber.message}
              </span>
            )}
          </div>

          <p className="col-span-6 font-bold  -mb-4">
            My camper is authorized to sign out on her/his/their own, and to
            leave the Camp Emmanuel facility without adult supervision after the
            daily program has finished.
          </p>
          <div className="flex items-center">
            <input
              id="independent-sign-out"
              {...register('independentSignOut')}
              name="Independent sign out"
              type="checkbox"
              className="w-5 h-5 text-blue-00 bg-white border-blue-border rounded-full focus:blue-300   focus:ring-2 "
            />
            <label htmlFor="independent-sign-out" className="ml-2 ">
              Yes
            </label>
            {errors.independentSignOut && (
              <span className="text-red">
                {errors.independentSignOut.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-300 hover:bg-blue-500 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center transition-colors"
        >
          Submit
        </button>
      </form>
      {/* <form onSubmit={handleSubmit(secondSubmit)}>
        <input type="text" name="name" />
        <input type="submit" />
      </form> */}
    </>
  );
};

export default form;
