import {Component, OnInit} from '@angular/core';
    import { Course } from './course';
    import {CourseMock} from '../mock/courseMock';
import { CourseService } from './course.service';
@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {

    public courses:Course[] = [] ;

    constructor(private courseService: CourseService){}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.courses = this.courseService.retrieveAll();
        
        
    }
    
}