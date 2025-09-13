import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Header } from "../common/Header";
import { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "@/utils/validations/signup.validator";
import type { UserRole } from "@/types/UserTypes";
import { Link } from "react-router";

interface ISignUpPageProps {
	onSubmit: ({
		email,
		name,
		password,
	}: {
		email: string;
		name: string;
		password: string;
	}) => void;
	role: UserRole;
}

export default function SignUpForm({ onSubmit, role }: ISignUpPageProps) {
	const [showPassword, setShowPassword] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			...(role === "organizer" && { is_company: false }),
		},
		validationSchema: signUpSchema,
		onSubmit: (values) => {
			onSubmit(values);
		},
	});

	return (
		<div className="min-h-screen bg-background">
			<Header role={role} />

			<div className="pt-32 pb-20 px-4">
				<div className="max-w-md mx-auto">
					{/* Back to Home */}
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
						<ArrowLeft className="h-4 w-4" />
						Back to Home
					</Link>

					<Card className="border-0 shadow-2xl">
						<CardHeader className="text-center pb-8">
							<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<div className="text-2xl font-bold text-primary">
									F
								</div>
							</div>
							<CardTitle className="text-2xl font-bold">
								Create Your Account
							</CardTitle>
							<CardDescription className="text-muted-foreground">
								Join Festivo and start creating amazing events
							</CardDescription>
						</CardHeader>

						<CardContent className="space-y-6">
							<form
								onSubmit={formik.handleSubmit}
								className="space-y-4">
								{/* Name Field */}
								<div className="space-y-2">
									<Label
										htmlFor="name"
										className="text-sm font-medium">
										Full Name
									</Label>
									<div className="relative">
										<User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<Input
											id="name"
											name="name"
											type="text"
											placeholder="Enter your full name"
											value={formik.values.name}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className="pl-10 h-12 bg-muted/50 border-border/50 focus:border-primary focus:ring-primary/20"
										/>
									</div>
									{formik.errors.name &&
										formik.touched.name && (
											<span className="text-red-500">
												{formik.errors.name}
											</span>
										)}
								</div>

								{/* Email Field */}
								<div className="space-y-2">
									<Label
										htmlFor="email"
										className="text-sm font-medium">
										Email Address
									</Label>
									<div className="relative">
										<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<Input
											id="email"
											name="email"
											type="text"
											placeholder="Enter your email"
											value={formik.values.email}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className="pl-10 h-12 bg-muted/50 border-border/50 focus:border-primary focus:ring-primary/20"
										/>
									</div>
									{formik.errors.email &&
										formik.touched.email && (
											<span className="text-red-500">
												{formik.errors.email}
											</span>
										)}
								</div>

								{/* Password Field */}
								<div className="space-y-2">
									<Label
										htmlFor="password"
										className="text-sm font-medium">
										Password
									</Label>
									<div className="relative">
										<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<Input
											id="password"
											name="password"
											type={
												showPassword
													? "text"
													: "password"
											}
											placeholder="Create a strong password"
											value={formik.values.password}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className="pl-10 pr-10 h-12 bg-muted/50 border-border/50 focus:border-primary focus:ring-primary/20"
										/>
										<Button
											type="button"
											variant="ghost"
											size="icon"
											className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
											onClick={() =>
												setShowPassword(!showPassword)
											}>
											{showPassword ? (
												<EyeOff className="h-4 w-4" />
											) : (
												<Eye className="h-4 w-4" />
											)}
										</Button>
									</div>
									{formik.errors.password &&
										formik.touched.password && (
											<span className="text-red-500">
												{formik.errors.password}
											</span>
										)}
									{/* <p className="text-xs text-muted-foreground">
										Password must be at least 8 characters
										long
									</p> */}
								</div>

								{role === "organizer" && (
									<div className="flex items-center space-x-2">
										<input
											id="is_company"
											name="is_company"
											type="checkbox"
											checked={formik.values.is_company}
											onChange={formik.handleChange}
										/>
										<Label htmlFor="is_company">
											Registering as a Company?
										</Label>
									</div>
								)}

								{/* Submit Button */}
								<Button
									type="submit"
									className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
									Create Account
								</Button>
							</form>

							{/* Divider */}
							<div className="relative">
								<Separator />
							</div>

							{/* Terms and Privacy */}
							<p className="text-xs text-muted-foreground text-center">
								By creating an account, you agree to our{" "}
								<Link
									to="/terms"
									className="text-primary hover:underline">
									Terms of Service
								</Link>{" "}
								and{" "}
								<Link
									to="/privacy"
									className="text-primary hover:underline">
									Privacy Policy
								</Link>
							</p>

							{/* Sign In Link */}
							<div className="text-center pt-4 border-t border-border/50">
								<p className="text-sm text-muted-foreground">
									Already have an account?{" "}
									<Link
										to={`/${
											role === "organizer" ? "org" : role
										}/signin`}
										className="text-primary hover:underline font-medium">
										Sign in here
									</Link>
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
