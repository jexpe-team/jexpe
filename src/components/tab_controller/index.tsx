import React, { FC } from 'react'
import {
    DragDropContext,
    Draggable,
    DraggableProvided,
    Droppable,
    OnDragEndResponder,
} from '@hello-pangea/dnd'
import { useShell } from 'src/contexts'
import { Center, Flex } from 'src/components'
import { theme } from 'antd'

import { HomeButton, Tab, OptionsMenu } from './components'
import Image from 'next/image'

const Component: FC = () => {
    const { ptys } = useShell()
    const {
        token: { paddingXS },
    } = theme.useToken()

    // a little function to help us with reordering the result
    // const reorder = (list: any, startIndex: any, endIndex: any) => {
    //     const result = Array.from(list)
    //     const [removed] = result.splice(startIndex, 1)
    //     result.splice(endIndex, 0, removed)
    //
    //     return result
    // }

    const onDragEnd: OnDragEndResponder = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return
        }

        // const ordered = reorder(
        //     items,
        //     result.source.index,
        //     result.destination.index,
        // )
        //
        // // @ts-ignore
        // setItems([...ordered])
    }

    const preventDragYMovement = (provided: DraggableProvided) => {
        let transform = provided.draggableProps.style?.transform

        if (transform) {
            transform = transform.replace(/,\s[-+]*\d+px\)/, ', 0px)')
            provided.draggableProps.style = {
                ...provided.draggableProps.style,
                transform,
            }
        }
    }

    return (
        <Flex
            className="gap-2"
            justify="space-between"
            style={{ padding: paddingXS }}
        >
            <HomeButton />

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(droppable) => (
                        <div
                            className="flex w-full gap-2"
                            ref={droppable.innerRef}
                            {...droppable.droppableProps}
                        >
                            {Array.from(ptys.entries()).map(
                                ([id, pty], index) => (
                                    <Draggable
                                        key={index}
                                        draggableId={id}
                                        index={index}
                                    >
                                        {(draggable, snapshot) => {
                                            preventDragYMovement(draggable)

                                            return (
                                                <div
                                                    className={`flex flex-grow ${
                                                        snapshot.isDragging
                                                            ? 'z-50'
                                                            : 'z-0'
                                                    }`}
                                                    ref={draggable.innerRef}
                                                    {...draggable.draggableProps}
                                                    {...draggable.dragHandleProps}
                                                >
                                                    <Tab
                                                        href={'/terminal/' + id}
                                                        label={
                                                            pty.shell
                                                                .display_name
                                                        }
                                                        icon={
                                                            <Center>
                                                                <Image
                                                                    src={
                                                                        pty
                                                                            .shell
                                                                            .icon
                                                                    }
                                                                    alt="pty-icon"
                                                                    width={16}
                                                                    height={16}
                                                                />
                                                            </Center>
                                                        }
                                                        dragging={
                                                            snapshot.isDragging
                                                        }
                                                    />
                                                </div>
                                            )
                                        }}
                                    </Draggable>
                                )
                            )}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <OptionsMenu />
        </Flex>
    )
}

export default Component
