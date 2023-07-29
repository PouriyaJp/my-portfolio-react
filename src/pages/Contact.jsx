import {useState, useEffect} from "react";
import {useFormik} from "formik";
import {useTheme} from "@mui/material/styles";
import {
    Typography,
    Card,
    CardContent,
    Slide,
    TextField,
    InputAdornment,
    CardActions,
    Button,
    Divider, Chip
} from "@mui/material";
import Grid from '@mui/material/Grid';
import {AccountCircle, Face6Rounded, SubjectRounded, EmailRounded, SettingsEthernetRounded} from "@mui/icons-material";
import {Helmet} from "react-helmet-async";
import {grey, teal} from "@mui/material/colors";
import worldMap from "../assets/map.svg";
import {contactValidationSchema} from "./validations/contactValidation";

const Contact = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, []);

    const contactInputNames = {
        fullName: "",
        email: "",
        subject: "",
        message: ""
    }

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: values => {
            console.log("Form Values: ", values)
        },
        validationSchema: contactValidationSchema,
    });

    return (
        <Card sx={{
            height: "100vh",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.palette.mode === "light" ? grey["A400"] : null,
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Divider textAlign="center" sx={{
                    mt: 2,
                    "&::before, &::after": {
                        borderColor: teal[800],
                    },
                }}>
                    <Chip icon={<AccountCircle/>} label={
                        <Typography variant="body1" color={teal[600]} sx={{
                            textAlign: "center"
                        }}>
                            ارتباط با من
                        </Typography>
                    }
                          sx={{p: 3}}
                    />
                </Divider>
                <Grid container sx={{mt: 5}}>
                    <Slide direction="down" in={loading} style={{
                        transitionDelay: loading ? "200ms" : "0ms",
                    }}>
                        <Grid xs={12} sm={12} md={8}>
                            <Card sx={{justifyContent: "center", alignItems: "center"}}>
                                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                                    <CardContent>
                                        <Grid container>
                                            <Grid xs={12} sx={{direction: "ltr"}}>
                                                <Grid container>
                                                    <Grid xs={12} md={8}>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            color="warning"
                                                            label="نام و نام خانوادگی"
                                                            name="fullName"
                                                            variant="outlined"
                                                            helperText={
                                                                formik.touched.fullName ? formik.errors.fullName : null
                                                            }
                                                            error={Boolean(
                                                                formik.touched.fullName && formik.errors.fullName
                                                            )}
                                                            value={formik.values?.fullName}
                                                            onChange={formik.handleChange}
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <Face6Rounded />
                                                                    </InputAdornment>
                                                                )
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid xs={12} md={8} sx={{mt:2}}>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            color="warning"
                                                            label="آدرس ایمیل"
                                                            name="email"
                                                            variant="outlined"
                                                            helperText={
                                                                formik.touched.email ? formik.errors.email : null
                                                            }
                                                            error={Boolean(
                                                                formik.touched.email && formik.errors.email
                                                            )}
                                                            value={formik.values?.email}
                                                            onChange={formik.handleChange}
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <EmailRounded />
                                                                    </InputAdornment>
                                                                )
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid xs={12} md={8} sx={{mt:2}}>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            color="warning"
                                                            label="عنوان"
                                                            name="subject"
                                                            variant="outlined"
                                                            helperText={
                                                                formik.touched.subject ? formik.errors.subject : null
                                                            }
                                                            error={Boolean(
                                                                formik.touched.subject && formik.errors.subject
                                                            )}
                                                            value={formik.values?.subject}
                                                            onChange={formik.handleChange}
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <SubjectRounded />
                                                                    </InputAdornment>
                                                                )
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid xs={12} md={8} sx={{mt:2}}>
                                                        <TextField
                                                            fullWidth
                                                            multiline
                                                            rows={6}
                                                            size="small"
                                                            color="warning"
                                                            label="متن پیام"
                                                            name="message"
                                                            variant="outlined"
                                                            helperText={
                                                                formik.touched.message ? formik.errors.message : null
                                                            }
                                                            error={Boolean(
                                                                formik.touched.message && formik.errors.message
                                                            )}
                                                            value={formik.values?.message}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions sx={{alignItems: "flex-start", flexDirection: "column"}}>
                                        <Button type="submit" color="success" variant="contained" sx={{mt: 2}}>
                                            ارسال کن
                                        </Button>
                                    </CardActions>
                                </form>
                            </Card>
                        </Grid>
                    </Slide>
                    <Slide direction="down" in={loading} style={{
                        transitionDelay: loading ? "200ms" : "0ms",
                    }}>
                        <Grid xs={0} sm={0} md={4} sx={{
                            textAlign: "center",
                            backgroundImage: `url(${worldMap})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            height: "700px"
                        }}>
                            <Card sx={{justifyContent: "center", alignItems: "center"}}>
                                <Typography variant="h6" color={teal[600]} sx={{
                                    fontFamily: "vazir",
                                    mt: 4,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}>
                                    بیا در مورد همه چیز باهم صحبت کنیم
                                </Typography>
                                <Typography variant="body1" color={teal[600]} sx={{
                                    mt: 2,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}>
                                    👋{" "}
                                    <a href="pouriya2910@gmail.com" alt="email" style={{
                                        color: "tomato",
                                    }}>
                                        ایمیل
                                    </a>{" "}
                                    بزن به من
                                </Typography>
                            </Card>
                        </Grid>
                    </Slide>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Contact;