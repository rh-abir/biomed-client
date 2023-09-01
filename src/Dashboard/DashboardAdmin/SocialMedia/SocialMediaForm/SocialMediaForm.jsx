import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Loader from '../../../../components/Loader/Loader';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const SocialMediaForm = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const { data: socialMedia, isLoading } = useQuery({
        queryKey: ["social-media", user?.email],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/social-media`);
            return res.data;
        },
    });
    if (isLoading) {
        return <Loader
        />;
    }

    const onSubmit = (data) => {
        const facebook = data.facebook;
        const twitter = data.twitter;
        const instagram = data.instagram;
        const linkedin = data.linkedin;
        const updatedSocialMedia = { facebook, twitter, instagram, linkedin };
        fetch(`http://localhost:5000/social-media/${socialMedia[0]._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSocialMedia)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    toast.success("Successfully Updated Social Media Link");
                }
            })
    }

    return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="title">Facebook link</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                        {...register("facebook")}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="title">Twitter link</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                        {...register("twitter")}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="title">Instagram link</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                        {...register("instagram")}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="title">Linkedin link</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                        {...register("linkedin")}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <button
                    className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
                    type="submit"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default SocialMediaForm;