<template>
    <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
        <el-form-item prop="username">
            <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
                <icon slot="prefix" name="user"></icon>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
                <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
                <icon slot="prefix" name="lock"></icon>
            </el-input>
        </el-form-item>
        <el-form-item prop="captcha">
            <el-row :span="24">
                <el-col :span="14">
                    <el-input size="small" @keyup.enter.native="handleLogin" :maxlength="captcha.len" v-model="loginForm.captcha" auto-complete="off" placeholder="请输入验证码">
                        <icon slot="prefix" name="safetycertificate"></icon>
                    </el-input>
                </el-col>
                <el-col :span="10">
                    <div class="login-code">
                        <span class="login-code-img" @click="refreshCode" v-if="captcha.type == 'text'">{{captcha.value}}</span>
                        <img :src="captcha.data" class="login-code-img" @click="refreshCode" v-else/>
                        <i class="icon-shuaxin login-code-icon" @click="refreshCode"></i>
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
                // captcha: {
                //     src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAZAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0PwX4L8K3XgXw9cXHhrRpp5dMtnkkksImZ2MSkkkrkknnNXbz4X+Drq+t7xNBsLeWFhxDaxiORc8q0ZUoQemcbh2Ip/grUoYPCfg/TnV/NutFikjfA2/u4osqTnOTvyOOin8esoA84u9G8O20tpdSeDvDcWkXLmIXD6dGxiYnCF+BtVjxu5wcZ65FPxJpngbSZdPvJdG8O2l9Ax87SZYIFkuYGbaxSMgF2BXchAydrKPvGtqa7OlSkamRPpd2v2XULOUZFu2NolRe8TDAYAYH3v71dbpQC6ZAiQyQxIgSNJHLtsHCkk85IA65NXJW6HNRknb3ru2v9dPQ86jsvDN5o801v4T8MQX1mElnhu9NjWOeJtwBjZQSuWBXJDYKkY5BrdtvC/hiPQ5NR1TwXodsyhpPJXT4SwQfdByv3iPp17dKp6P4eum0az1e2eOe+ikLwxzKceTkZj5JGdylgQB1HpuroNWludd8MsNKhikaY7JUnlMTRAfeAG05cEAbTtBzncO9VYqKfL3NoO9rmXH4J0eS0W6/4RHwwrMm8Wp02Pd648zGM/8AAetDeHvBT+G5NYg8J6GyLA0qq2nxDkA/Kfl9RipbTxbfqPM1Cx0y2tkyJFTUJHuVIBIHlGBRkkf3sAZOTjnMvbGI+EdM0837Jflo1EUFycFJ5CQXQHDAhWwT3VsHrXK5W2fQK8nClKS3QaJpXg66uLjTdU8K+HrbU7YF2jGnRBZIxg71yp6AjIycZB4yKx9R0fw/d+CPFEsnhLQrO6h0mW6tZILGNWCtCxUg4yGUjqMduBVnxJpWpRX4t79LW9n1Axpb3UEbQlHQ7dxG44JRipwcEHpjIq14zNrb6JqEtnMslnd+GLyCBo2DIwSMspBHX5T1oUne3Y4o1Zqai38Ls/O7sv0+8q+HPDHh59A8Ds0V9Y3lzYRyx3FjcPCskn2cFkYqR8zBmfgc+WcnGQfQdL0yTTfNVtUvr1HxsW7ZG8vGejBQxzn+InoMY5z8IUVqegffrokkbI6hkYEMrDIIPY1gWXh64trC80f7bMmmAqbCSCVkntxnPl57qpA25zlTtIIHPxDRQB9xade6vZ30emavbm5358jUraP5JMDOJVH+rbA6/dPYgkLV/WdMj1jSbiwkdo/NUFJU+9E4IZHHurAMPcV8HUUAfcfhbWpNc0cm8hEGpWsjWt/b9o5l+9j1Ughge6sKxBFrVp8QdXXSIdLkgXTLHbby74NqeZdYAZQ4zu3nO3oQMcEn43ooA+69N1DVLi4aDUNFezwm4TpcxyxMcj5Qch8855UDg815p4rtNQ8JWvirTrFfO0bVNNu7qK1ZgPJJjbzTGTwNpIYp3ViV5Qhvl+igD//Z",
                //     value: "1111",
                //     len: 4,
                //     type: "img"
                // },
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
            ...mapGetters(["captcha"])
        },
        props: [],
        methods: {
            refreshCode() {
                this.$store.dispatch(UserActions.actions.CAPTCHA)
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
                            console.log(res)
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
