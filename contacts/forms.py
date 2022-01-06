from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm
from django.contrib.auth.models import User
from crispy_forms.helper import FormHelper
from crispy_forms.bootstrap import StrictButton
from crispy_forms.layout import Submit, Layout, Row, Column, Div, Field
from crispy_forms.bootstrap import TabHolder, Tab
from crispy_forms.bootstrap import InlineRadios
from . forms import *
from django.forms import ModelForm
from django.forms import widgets
import datetime
from .models import *

# ==============================================
#                  FORM GISCON
#                        START
# ==============================================
class PostForm(forms.Form):
    class Meta:
        model = Post
        fields = ['__all__' ]
        exclude = ['tags']



# ==============================================
#                  FORM GISCON
#                        END
# ==============================================


# class EditProfileForm(UserChangeForm):
#         password = forms.CharField(label="", widget=forms.TextInput(attrs={'type': 'hidden'}))
#
#         class Meta:
#             model = User
#             fields = ('username',
#                       'first_name',
#                       'last_name',
#                       'email',
#                       'password')
#
# class SignUpForm(UserCreationForm):
#         email = forms.EmailField(label='', widget=forms.EmailInput(attrs={'class': 'form-control','placeholder':'Enter Email Here' }))
#         last_name = forms.CharField(label='', widget=forms.TextInput(attrs={'class': 'form-control','placeholder':'Last Name' }))
#         first_name = forms.CharField(label='', widget=forms.TextInput(attrs={'class': 'form-control','placeholder':'First Name' }))
#
#         class Meta:
#             model = User
#             fields = ('username','first_name','last_name','email','password1','password2')
#
#         def __init__(self, *args, **kwargs):
#             super(SignUpForm, self).__init__(*args, **kwargs)
#
#             self.fields['username'].widget.attrs['class'] = 'form-control'
#             self.fields['username'].widget.attrs['placeholder'] = 'Pseudo'
#             self.fields['username'].label = ''
#             self.fields['username'].help_text = '<span class= "form-text text-muted"><small>Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</small></span>'
#
#             self.fields['password1'].widget.attrs['class'] = 'form-control'
#             self.fields['password1'].widget.attrs['placeholder'] = 'Password'
#             self.fields['password1'].label = ''
#             self.fields['password1'].help_text = '<ul class ="form-text text-muted small" ><li>Your password can\'t be too similar to your other personal information.</li><li>Your password must contain at least 8 characters.</li><li>Your password can\' t be a commonly used password.</li><li>Your password can\' t be entirely numeric.</li></ul>'
#
#             self.fields['password2'].widget.attrs['class'] = 'form-control'
#             self.fields['password2'].widget.attrs['placeholder'] = 'Comfirm password'
#             self.fields['password2'].label = ''
#             self.fields['password2'].help_text = '<span class="form-text text-muted"><small>Enter the same password as before, for verification.</small></span>'

# tva = forms.IntegerField(label="Tva", widget=forms.NumberInput(attrs={'class': 'form-control', 'Tva'}))
# rendez_vous = forms.DateTimeField()