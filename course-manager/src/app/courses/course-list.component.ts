import {Component, OnInit} from '@angular/core';
    import { Course } from './course';
    import {CourseMock} from '../mock/courseMock';
@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {
    
    title = 'course-manager';
    name: String = 'Nome';
    public courses:Course[] = [] ;


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.courses = CourseMock;
        
        
    }
    
}