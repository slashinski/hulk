import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FastClickDirective } from '@hulk/ui/fast-click';

import { AccordionComponent, AccordionIcon } from '../accordian/accordian.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlexLayoutModule, NoopAnimationsModule],
      declarations: [AccordionComponent, FastClickDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => { return { matches: true } })
    });
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title if provided', () => {
    const expectedTitle = 'chicken wing';
    component.title = expectedTitle;
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('.title'));
    expect(debugElement.nativeElement.innerHTML).toEqual(expectedTitle);
  });

  describe('setting titleClass', () => {
    it('should default to "h5"', () => {
      expect(component.titleClass).toEqual('h5');

      const debugElement = fixture.debugElement.query(By.css('.title'));
      expect(debugElement.nativeElement.getAttribute('class').indexOf('h5')).toBeGreaterThan(-1);
    });

    it('should set to class provided', () => {
      component.titleClass = 'crackle';
      fixture.detectChanges();

      expect(component.titleClass).toEqual('crackle');

      const debugElement = fixture.debugElement.query(By.css('.title'));
      expect(debugElement.nativeElement.getAttribute('class').indexOf('h5')).toBe(-1);
      expect(debugElement.nativeElement.getAttribute('class').indexOf('crackle')).toBeGreaterThan(-1);
    });

    it('should set icon if provided', () => {
      component.icon = new AccordionIcon('red', 'icon-name');
      fixture.detectChanges();

      expect(component.icon).toEqual(new AccordionIcon('red', 'icon-name'));

      const iconHolder = fixture.debugElement.query(By.css('.icon-holder'));
      const icon = fixture.debugElement.query(By.css('.icon'));
      expect(iconHolder.nativeElement.getAttribute('class').indexOf('red')).toBeGreaterThan(-1);
      expect(icon.nativeElement.getAttribute('class').indexOf('icon-name')).toBeGreaterThan(-1);
    });
  });

  xdescribe('setting the arrowClass', () => {
    it('should default to bpfArrow', () => {
      expect(component.arrowClass).toEqual('bpf-arrow');

      const debugElement = fixture.debugElement.query(By.css('div split-layout mat-icon'));
      expect(debugElement.nativeElement.getAttribute('class').indexOf('bpf-arrow')).toBeGreaterThan(-1);
    });

    it('should set to the class provided', () => {
      component.arrowClass = 'chicken-wing';
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('mat-icon'));

      expect(debugElement.nativeElement.getAttribute('class').indexOf('bpf-arrow')).toBe(-1);
      expect(debugElement.nativeElement.getAttribute('class').indexOf('chicken-wing')).toBeGreaterThan(-1);
    });
  });

  describe('clicking on the title', () => {
    it('should toggle the state and emit the event', () => {
      let originalIsOpen = component.isOpen;

      component.onTitleClicked.subscribe(() => {
        expect(component.isOpen).toEqual(!originalIsOpen);
      });
    });

    it('should not toggle the state or emit the event if locked message is present', () => {
      spyOn(component, 'toggleOpen');
      spyOn(component.onTitleClicked, 'emit');
      component.lockMessage = 'dont open me';
      expect(component.toggleOpen).not.toHaveBeenCalled();
      expect(component.onTitleClicked.emit).not.toHaveBeenCalled();
    });
  });
});
