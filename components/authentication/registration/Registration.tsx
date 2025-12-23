import { googleLogo } from "@/assets/icon/icon";
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
import { SvgXml } from 'react-native-svg';


const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

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
                        <Text style={[styles.label, { marginTop: 24 }]}>
                            Password
                        </Text>

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

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                console.log("Forgot Password clicked");
                                // navigation.navigate("ForgotPassword");
                            }}
                        >
                            <Text
                                style={{
                                    color: "#E8E8E8",
                                    fontSize: 13,
                                    marginTop: 15,
                                    textAlign: "right",
                                }}
                            >
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        {/* login btn  */}

                        <TouchableOpacity style={{ marginTop: 90, borderWidth: 1, borderColor: "#F4F2EE", paddingVertical: 20, borderRadius: 10 }} >
                            <Text style={{ color: "#F4F2EE", fontWeight: "bold", fontSize: 13, textAlign: "center" }} >Log in</Text>
                        </TouchableOpacity>


                        <View style={styles.orWrapper}>
                            <View style={styles.line} />
                            <Text style={styles.orText}>OR</Text>
                            <View style={styles.line} />
                        </View>



                        <TouchableOpacity style={{ borderWidth: 1, borderColor: "#F4F2EE", paddingVertical: 20, borderRadius: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }} >
                            <SvgXml xml={googleLogo} width={24} height={24} /><Text style={{ color: "#F4F2EE", fontWeight: "bold", fontSize: 13, textAlign: "center" }} >Continue with Google</Text>
                        </TouchableOpacity>

                        <View style={{ marginTop: 58 }} >
                            <Text style={{ color: "#F4F2EE", fontWeight: "bold", fontSize: 13, textAlign: 'center' }}  >You don’t have an account? <Text>Register</Text></Text>
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
        marginBottom: 8,
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
    },
    focusedInput: {
        borderColor: "#28A745", // focus color
    },

    /* Password */
    passwordWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#8A8A8A",
        borderRadius: 10,
        backgroundColor: "#545454",
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
});
