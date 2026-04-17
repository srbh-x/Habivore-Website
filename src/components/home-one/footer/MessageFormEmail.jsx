"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ArrowRight3Img from "../../../public/images/icon/arrow-right3.svg";
import Field from "../../common/Field";

function MessageFormEmail({ setParentSuccess }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);

    const submitForm = (formData) => {
        setLoading(true);

        emailjs
            .send(
                "service_tqsn2rs",
                "template_r3kc1un",
                formData,
                "vu-I-dIwbYOYYVFlh"
            )
            .then(() => {
                setParentSuccess(true); // 👈 notify parent
                setLoading(false);
                reset();
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div className="aximo-form-field">
                <Field error={errors.name}>
                    <input
                        {...register("name", { required: "Name is required." })}
                        type="text"
                        placeholder="Your Name"
                    />
                </Field>
            </div>

            <div className="aximo-form-field">
                <Field error={errors.email}>
                    <input
                        {...register("email", { required: "Email is required." })}
                        type="email"
                        placeholder="Your email address"
                    />
                </Field>
            </div>

            <div className="aximo-form-field">
                <Field error={errors.phone}>
                    <input
                        {...register("phone", { required: "Phone number is required." })}
                        type="tel"
                        placeholder="Your Phone Number"
                    />
                </Field>
            </div>

            <div className="aximo-form-field">
                <textarea
                    {...register("message", { required: "Message is required." })}
                    placeholder="Write your message here..."
                ></textarea>
            </div>

            <button id="aximo-submit-btn" type="submit">
                {loading ? "Sending..." : "Send message"}
                <span>
                    <Image src={ArrowRight3Img} alt="ArrowRight3Img" />
                </span>
            </button>
        </form>
    );
}

export default MessageFormEmail;