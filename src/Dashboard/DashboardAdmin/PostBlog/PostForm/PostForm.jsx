import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../Provider/AuthProvider';

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;


const PostForm = () => {
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
        const formData = new FormData();
        formData.append("image", data.thumbnail[0]);

        axios.post(imageUrl, formData)
        .then((dataImage1) => {
        const currentData = {
            email: user?.email,
            title: data?.title,
            thumbnail: dataImage1?.data?.data?.display_url,
            writer: data?.writer,
            writer_img: user?.photoURL,
            writing_date: data?.date,
            intro: data?.intro,
            description: data?.description,
            conclusion: data?.conclusion
        };
        console.log(currentData);
        axios.post(`${import.meta.env.VITE_BASE_URL}/blogs`, currentData).then((data) => {
            if (data.data.insertedId) {
                reset();
                toast.success("Successfully Added Blog");
            }
        });
    });
    }
    return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 w-full md:w-1/4">
                    <label htmlFor="image" className="block mb-1">
                        Upload blog thumbnail
                    </label>
                    <input
                        type="file"
                        id="thumbnail"
                        className="block w-full border text-gray-500
                    rounded-xl
                file:mr-4 file:py-4 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                dark:file:bg-gray-400
                file:bg-gray-200 file:text-gray-700
                hover:file:bg-gray-100
                "
                        {...register("thumbnail", {
                            required: "Image is thumbnail",
                            validate: {
                                fileSize: (file) =>
                                    file[0]?.size < 1048576 ||
                                    "Image size must be less than 1MB",
                                fileType: (file) =>
                                    /jpeg|png|gif/.test(file[0]?.type) ||
                                    "Unsupported image format (jpeg/png/gif only)",
                            },
                        })}
                    />
                    {errors.image && (
                        <p className="text-red-500">{errors.image.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="title">Blog Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                        {...register("title", { required: "Blog Title is required" })}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="mb-4">
                        <label htmlFor="writer">Writer</label>
                        <input
                            type="text"
                            id="writer"
                            placeholder="Writer"
                            defaultValue={user?.displayName}
                            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            {...register("writer", { required: "Writer name is required" })}
                        />
                        {errors.username && (
                            <p className="text-red-500">{errors.username.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="writing-date">Writing date</label>
                        <input
                            type="date"
                            id="writing-date"
                            placeholder="Enter writing date"
                            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            {...register("date", { required: "Date is required" })}
                        />
                        {errors.deadline && (
                            <p className="text-red-500">{errors.deadline.message}</p>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="intro">Intro</label>
                    <input
                        type="text"
                        id="intro"
                        placeholder="Enter intro"
                        className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                        {...register("intro")}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="description">Blog Description</label>
                    <textarea
                        id="description"
                        placeholder="Enter blog description"
                        className="w-full h-60 px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                        {...register("description", {
                            required: "Blog description is required",
                        })}
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-500">{errors.description.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="name">Conclusion</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter conclusion"
                        className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                        {...register("conclusion")}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <button
                    className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
                    type="submit"
                >
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default PostForm;