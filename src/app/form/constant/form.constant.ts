export const registerFormConfig = {
  formTitle: "ثبت نام",
  saveBtnTitle: "تایید",
  cancelBtnTitle: "انصراف",
  formControls: [
    {
      name: "firstName",
      label: "نام",
      value: "",
      placeholder: "نام را وارد کنید",
      type: "text",
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: "فیلد نام الزامی می باشد"
        }
      ]
    },
    {
      name: "lastName",
      label: "نام خانوادگی",
      value: "",
      placeholder: "نام خانوادگی را وارد کنید",
      type: "text",
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: "فیلد نام خانوادگی الزامی می باشد"
        }
      ]
    },
    {
      name: "userName",
      label: "نام کاربری",
      value: "",
      placeholder: "نام کاربری را وارد کنید",
      type: "text",
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: "فیلد نام کاربری الزامی می باشد"
        }
      ]
    },
    {
      name: "email",
      label: "پست الکترونیکی",
      value: "",
      placeholder: "پست الکترونیکی را وارد کنید",
      type: "email",
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: "فیلد پست الکترونیکی الزامی می باشد"
        },
        {
          validatorName: 'email',
          email: true,
          message: "فرمت پست الکترونیکی وارد شده صحیح نمی باشد"
        }
      ]
    },
    {
      name: "password",
      label: "کلمه عبور",
      value: "",
      placeholder: "کلمه عبور را وارد کنید",
      type: "password",
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: "فیلد کلمه عبور الزامی می باشد"
        },
        {
          validatorName: 'minlength',
          minLength: 8,
          message: "کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد"
        }
      ]
    }
  ]
}
