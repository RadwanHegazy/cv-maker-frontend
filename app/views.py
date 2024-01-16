from django.shortcuts import render, redirect
import requests as send_request

def index (request) : 
    if request.method == "POST" : 
        personal_info = {
            'full_name' : request.POST['full_name'],
            'phone' : request.POST['phone'],
            'email' : request.POST['email'],
            'address' : request.POST['address'],
        }

        about = request.POST['about']

        projects = request.POST['projects']

        cv_type = request.POST['cv_type']
 
        req = send_request.post(
            url = 'http://127.0.0.1:4444/',
            data = {
                'about_me' : about,
                'projects' : projects,
                'cv_type' : cv_type,
                **personal_info
            }            
        )

        response = req.json()['cv']
        
        return redirect(f'http://127.0.0.1:4444/{response}')

    return render(request,'index.html')