<template>
    <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
        <el-form-item prop="username">
            <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
                <i slot="prefix" class="icon-yonghu"></i>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
                <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
                <i slot="prefix" class="icon-mima"></i>
            </el-input>
        </el-form-item>
        <el-form-item prop="captcha">
            <el-row :span="24">
                <el-col :span="14">
                    <el-input size="small" @keyup.enter.native="handleLogin" :maxlength="captcha.len" v-model="loginForm.captcha" auto-complete="off" placeholder="请输入验证码">
                        <i slot="prefix" class="icon-yanzhengma"></i>
                    </el-input>
                </el-col>
                <el-col :span="10">
                    <div class="login-code">
                        <span class="login-code-img" @click="refreshCode" v-if="captcha.type == 'text'">{{captcha.value}}</span>
                        <img :src="captcha.src" class="login-code-img" @click="refreshCode" v-else/>
                        <!-- <i class="icon-shuaxin login-code-icon" @click="refreshCode"></i> -->
                    </div>
                </el-col>
            </el-row>

        </el-form-item>
        <el-checkbox v-model="checked">记住账号</el-checkbox>
        <el-form-item>
            <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {validateEmail} from "../../common/utils/validate";
    import {UserActions} from "../../store/actions";
    import { mapGetters } from "vuex";
    export default {
        name: "userLogin",
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!validateEmail(value)) {
                    callback(new Error("请输入正确的用户名"));
                } else {
                    callback();
                }
            };
            const validateCaptcha = (rule, value, callback) => {
                // if (this.captcha.value != value) {
                //     this.loginForm.captcha = "";
                //     this.refreshCode();
                //     callback(new Error("请输入正确的验证码"));
                // } else {
                    callback();
               // }
            };
            return {
                loginForm: {
                    username: "admin@a.com",
                    password: "adminadmin",
                    captcha: "1111",
                    captchaId: ""
                },
                checked: false,
                captcha: {
                    src: "",
                    value: "",
                    len: 4,
                    type: "text"
                },
                loginRules: {
                    username: [
                        { required: true, trigger: "blur", validator: validateUsername }
                    ],
                    password: [
                        { required: true, message: "请输入密码", trigger: "blur" },
                        { min: 6, message: "密码长度最少为6位", trigger: "blur" }
                    ],
                    captcha: [
                        { required: true, message: "请输入验证码", trigger: "blur" },
                        { min: 4, max: 4, message: "验证码长度为4位", trigger: "blur" },
                        { required: true, trigger: "blur", validator: validateCaptcha }
                    ]
                },
                passwordType: "password"
            };
        },
        created() {
            this.refreshCode();
        },
        mounted() {},
        computed: {
            ...mapGetters(["tagWel"])
        },
        props: [],
        methods: {
            refreshCode() {
                // this.loginForm.redomStr = randomLenNum(this.code.len, true);
                // this.code.type == "text"
                //     ? (this.code.value = randomLenNum(this.code.len))
                //     : (this.code.src = `${this.codeUrl}/${this.loginForm.redomStr}`);
                // this.loginForm.code = this.code.value;
            },
            showPassword() {
                this.passwordType == ""
                    ? (this.passwordType = "password")
                    : (this.passwordType = "");
            },
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.$store.dispatch(UserActions.actions.LOGIN, this.loginForm).then(res => {
                            this.$router.push({ path: '/' });
                        });
                    }
                });
            }
        }
    };
</script>

<style>
</style>
