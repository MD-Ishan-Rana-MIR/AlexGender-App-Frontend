import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Registration = () => {
    const router = useRouter();
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const [fullNameFocused, setFullNameFocused] = useState(false);
    const [userNameFocused, setUserNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar barStyle="light-content" backgroundColor="#070619" />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Create Account</Text>

                        {/* Full Name */}
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={[
                                styles.input,
                                fullNameFocused && styles.focusedInput,
                            ]}
                            placeholder="Enter your full name"
                            placeholderTextColor="#8A8A8A"
                            value={fullName}
                            onChangeText={setFullName}
                            onFocus={() => setFullNameFocused(true)}
                            onBlur={() => setFullNameFocused(false)}
                            autoCapitalize="words"
                        />

                        {/* User Name */}
                        <Text style={styles.label}>User Name</Text>
                        <TextInput
                            style={[
                                styles.input,
                                userNameFocused && styles.focusedInput,
                            ]}
                            placeholder="Enter your user name"
                            placeholderTextColor="#8A8A8A"
                            value={userName}
                            onChangeText={setUserName}
                            onFocus={() => setUserNameFocused(true)}
                            onBlur={() => setUserNameFocused(false)}
                            autoCapitalize="none"
                        />

                        {/* Email */}
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={[
                                styles.input,
                                emailFocused && styles.focusedInput,
                            ]}
                            placeholder="Enter your email"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            onFocus={() => setEmailFocused(true)}
                            onBlur={() => setEmailFocused(false)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        {/* Password */}
                        <Text style={styles.label}>Password</Text>
                        <View
                            style={[
                                styles.passwordWrapper,
                                passwordFocused && styles.focusedInput,
                            ]}
                        >
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Enter your password"
                                placeholderTextColor="#999"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(false)}
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeButton}
                            >
                                <Text style={styles.eyeText}>
                                    {showPassword ? "🙈" : "👁️"}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Confirm Password */}
                        <Text style={styles.label}>Confirm Password</Text>
                        <View
                            style={[
                                styles.passwordWrapper,
                                passwordFocused && styles.focusedInput,
                            ]}
                        >
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Confirm your password"
                                placeholderTextColor="#999"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(false)}
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeButton}
                            >
                                <Text style={styles.eyeText}>
                                    {showPassword ? "🙈" : "👁️"}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Checkbox */}
                        <TouchableOpacity
                            style={styles.checkboxWrapper}
                            onPress={() => setIsChecked(!isChecked)}
                        >
                            <View style={[styles.checkbox, isChecked && styles.checkedBox]}>
                                {isChecked && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.checkboxText}>
                                I agree to the Terms and Conditions
                            </Text>
                        </TouchableOpacity>



                        {/* Log in Button */}
                        <TouchableOpacity style={styles.loginBtn}>
                            <Text style={styles.loginText}>Register</Text>
                        </TouchableOpacity>





                        {/* Register Text */}
                        <View style={{ marginTop: 28 }}>
                            <Text style={styles.registerText}>
                                Already have an account? <Text onPress={() => { router.push("/") }} style={{ color: "white", fontWeight: 600 }}>Login</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Registration;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#070619",
        paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        color: "white",
        fontSize: 28,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 60,
    },
    label: {
        fontSize: 13,
        fontWeight: "800",
        marginBottom: 16,
        color: "#DEDCD9",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#8A8A8A",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: "#545454",
        color: "#fff",
        marginBottom: 20,
    },
    focusedInput: {
        borderColor: "#28A745",
    },
    passwordWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#8A8A8A",
        borderRadius: 10,
        backgroundColor: "#545454",
        marginBottom: 20,
    },
    passwordInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#fff",
    },
    eyeButton: {
        paddingHorizontal: 15,
    },
    eyeText: {
        fontSize: 18,
    },
    checkboxWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        gap: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "#8A8A8A",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    checkedBox: {
        backgroundColor: "#28A745",
        borderColor: "#28A745",
    },
    checkmark: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    checkboxText: {
        color: "#FFFFFF",
        fontSize: 11,
    },
    forgotText: {
        color: "#E8E8E8",
        fontSize: 13,
        marginTop: 15,
        textAlign: "right",
    },
    loginBtn: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#F4F2EE",
        paddingVertical: 20,
        borderRadius: 10,
    },
    loginText: {
        color: "#F4F2EE",
        fontWeight: "bold",
        fontSize: 13,
        textAlign: "center",
    },
    orWrapper: {
        paddingVertical: 30,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#E8E7E7",
    },
    orText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "500",
    },
    googleBtn: {
        borderWidth: 1,
        borderColor: "#F4F2EE",
        paddingVertical: 20,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    googleText: {
        color: "#F4F2EE",
        fontWeight: "bold",
        fontSize: 13,
        textAlign: "center",
    },
    registerText: {
        color: "#F4F2EE",
        fontSize: 13,
        textAlign: "center",
    },
});
