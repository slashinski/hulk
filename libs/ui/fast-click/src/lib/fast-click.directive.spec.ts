import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FastClickDirective } from './fast-click.directive';

@Component({
  template: `
    <h2 id="testEl" fastClick (onFastClick)="testHandler($event)">Something Yellow</h2>
  `
})
class TestComponent {
  testHandler($event) {}
}

describe('FastClickDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FastClickDirective],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('passes mouse click on as fastclick events', () => {
    const triggeredEvent = new Event('');
    let event;
    const handlerSpy = spyOn(fixture.componentInstance, 'testHandler').and.callFake(e => (event = e));

    const sut = fixture.debugElement.query(By.css('#testEl'));
    sut.triggerEventHandler('click', triggeredEvent);

    expect(handlerSpy).toHaveBeenCalled();
    expect(event).toBe(triggeredEvent);
  });

  it("passes touch end events on as fastclick events if the touch hasn't traveled at least 20px", () => {
    const startEvent = { touches: [{ pageX: 0, pageY: 0 }] };

    const endEvent = {
      changedTouches: [
        { pageX: 14, pageY: 14 } // travel of roughly 19.7px
      ],
      preventDefault: jasmine.createSpy('preventDefault')
    };
    let event;

    const handlerSpy = spyOn(fixture.componentInstance, 'testHandler').and.callFake(e => (event = e));

    const sut = fixture.debugElement.query(By.css('#testEl'));
    sut.triggerEventHandler('touchstart', startEvent);
    sut.triggerEventHandler('touchend', endEvent);

    expect(handlerSpy).toHaveBeenCalled();
    expect(event).toBe(endEvent);
  });

  it('ignores touch end events if the touch has traveled more than 21px', () => {
    const startEvent = { touches: [{ pageX: 0, pageY: 0 }] };

    const endEvent = {
      changedTouches: [
        { pageX: 15, pageY: 15 } // travel of roughly 21px
      ],
      preventDefault: jasmine.createSpy('preventDefault')
    };
    let event;

    const handlerSpy = spyOn(fixture.componentInstance, 'testHandler').and.callFake(e => (event = e));

    const sut = fixture.debugElement.query(By.css('#testEl'));
    sut.triggerEventHandler('touchstart', startEvent);
    sut.triggerEventHandler('touchend', endEvent);

    expect(handlerSpy).not.toHaveBeenCalled();
    expect(event).toBeUndefined();
  });

  it('passes enter key up events on as fastclick events', () => {
    const triggeredEvent = new Event('');
    (triggeredEvent as any).which = 13;

    let event;
    const handlerSpy = spyOn(fixture.componentInstance, 'testHandler').and.callFake(e => (event = e));

    const sut = fixture.debugElement.query(By.css('#testEl'));
    sut.triggerEventHandler('keyup', triggeredEvent);

    expect(handlerSpy).toHaveBeenCalled();
    expect(event).toBe(triggeredEvent);
  });

  it('ignores non-enter key up events', () => {
    const triggeredEvent = new Event('');
    (triggeredEvent as any).which = 1;

    let event;
    const handlerSpy = spyOn(fixture.componentInstance, 'testHandler').and.callFake(e => (event = e));

    const sut = fixture.debugElement.query(By.css('#testEl'));
    sut.triggerEventHandler('keyup', triggeredEvent);

    expect(handlerSpy).not.toHaveBeenCalled();
    expect(event).toBeUndefined();
  });

  it('applies tab index; 0 is the default value', () => {
    // h2 elements don't normally have a tab index value
    const sut = fixture.debugElement.query(By.css('#testEl'));

    expect(sut.nativeElement.tabIndex).toBe(0);
  });
});
