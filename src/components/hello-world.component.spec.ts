import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelloWorldComponent } from './hello-world.component';

describe('AppComponent', function () {
    let de: DebugElement;
    let comp: HelloWorldComponent;
    let fixture: ComponentFixture<HelloWorldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HelloWorldComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HelloWorldComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('.hello-world-component'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should have expected <h1> text', () => {
        fixture.detectChanges();
        const h1 = de.nativeElement;
        expect(h1.innerText).toBe('Hello world component!');
    });
});
