import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("profile status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='sadas' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('sadas')
    })

    test("will be span", () => {
        const component = create(<ProfileStatus status='sadas' />)
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("right text", () => {
        const component = create(<ProfileStatus status='sadas' />)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe('sadas')
    })

    test("will not input", () => {
        const component = create(<ProfileStatus status='sadas' />)
        const root = component.root
        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    })
})