import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Header } from "../common/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "../ui/label";
import { useFormik } from "formik";
import { Input } from "../ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { signinSchema } from "@/utils/validations/auth/signin.validator";

interface ISignInPageProps {
	onSubmit: ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => void;
	role: string;
}

export default function SignInForm({ onSubmit, role }: ISignInPageProps) {
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: signinSchema,
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
								Welcome Back
							</CardTitle>
							<CardDescription className="text-muted-foreground">
								Sign in to your Festivo account to continue
							</CardDescription>
						</CardHeader>

						<CardContent className="space-y-6">
							<form
								onSubmit={formik.handleSubmit}
								className="space-y-4">
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
											required
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
											placeholder="Enter your password"
											value={formik.values.password}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className="pl-10 pr-10 h-12 bg-muted/50 border-border/50 focus:border-primary focus:ring-primary/20"
											required
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
								</div>

								{/* Remember Me & Forgot Password */}
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-2">
										<Checkbox
											id="remember"
											checked={rememberMe}
											onCheckedChange={(checked) =>
												setRememberMe(
													checked as boolean
												)
											}
											className="border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
										/>
										<Label
											htmlFor="remember"
											className="text-sm text-muted-foreground cursor-pointer">
											Remember me
										</Label>
									</div>
									<Link
										to="/forgot-password"
										className="text-sm text-primary hover:underline">
										Forgot password?
									</Link>
								</div>

								{/* Submit Button */}
								<Button
									type="submit"
									className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
									Sign In
								</Button>
							</form>

							{/* Divider */}
							<div className="relative">
								<Separator />
							</div>

							{/* Sign Up Link */}
							<div className="text-center pt-4 border-t border-border/50">
								<p className="text-sm text-muted-foreground">
									Don't have an account?{" "}
									<Link
										to={`/${
											role === "organizer" ? "org" : role
										}/signup`}
										className="text-primary hover:underline font-medium">
										Create one here
									</Link>
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Additional Help */}
					<div className="text-center mt-8">
						<p className="text-sm text-muted-foreground">
							Need help?{" "}
							<Link
								to="/"
								className="text-primary hover:underline">
								Contact Support
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
