import { trigger, state, style, animate, transition, } from "@angular/animations";

export function visibility() {
    return trigger('visibility', [state('shown', style({opacity: 1})),
                                  state('hidden', style({opacity: 0})),
                                 transition('*<=>*', animate('500ms ease-in')) ]);
}

export function flyInOut() {
    return trigger('flyInOut', [state('*', style({opacity: 1 , transform: 'translateX(0)'})),
                               transition(':enter', [
                                   style({transform: 'translateX(-100%)', opacity: 0}), animate('600ms ease-in')]), // from void state
                               transition(':leave', [
                                   animate( '500ms ease-out', style({transform: 'translateX(100%)', opacity: 0}))])]);
}
