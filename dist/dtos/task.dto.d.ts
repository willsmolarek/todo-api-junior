import { z } from 'zod';
export declare const CreateTaskSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        priority: z.ZodDefault<z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
        dueDate: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        priority: "LOW" | "MEDIUM" | "HIGH";
        description?: string | undefined;
        dueDate?: string | undefined;
    }, {
        title: string;
        description?: string | undefined;
        priority?: "LOW" | "MEDIUM" | "HIGH" | undefined;
        dueDate?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        title: string;
        priority: "LOW" | "MEDIUM" | "HIGH";
        description?: string | undefined;
        dueDate?: string | undefined;
    };
}, {
    body: {
        title: string;
        description?: string | undefined;
        priority?: "LOW" | "MEDIUM" | "HIGH" | undefined;
        dueDate?: string | undefined;
    };
}>;
export declare const UpdateTaskSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<["PENDING", "IN_PROGRESS", "COMPLETED"]>>;
        priority: z.ZodOptional<z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
        dueDate: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        description?: string | undefined;
        status?: "PENDING" | "IN_PROGRESS" | "COMPLETED" | undefined;
        priority?: "LOW" | "MEDIUM" | "HIGH" | undefined;
        dueDate?: string | undefined;
    }, {
        title?: string | undefined;
        description?: string | undefined;
        status?: "PENDING" | "IN_PROGRESS" | "COMPLETED" | undefined;
        priority?: "LOW" | "MEDIUM" | "HIGH" | undefined;
        dueDate?: string | undefined;
    }>;
    params: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        id: string;
    };
    body: {
        title?: string | undefined;
        description?: string | undefined;
        status?: "PENDING" | "IN_PROGRESS" | "COMPLETED" | undefined;
        priority?: "LOW" | "MEDIUM" | "HIGH" | undefined;
        dueDate?: string | undefined;
    };
}, {
    params: {
        id: string;
    };
    body: {
        title?: string | undefined;
        description?: string | undefined;
        status?: "PENDING" | "IN_PROGRESS" | "COMPLETED" | undefined;
        priority?: "LOW" | "MEDIUM" | "HIGH" | undefined;
        dueDate?: string | undefined;
    };
}>;
export declare const TaskIdSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        id: string;
    };
}, {
    params: {
        id: string;
    };
}>;
export type CreateTaskDTO = z.infer<typeof CreateTaskSchema>;
export type UpdateTaskDTO = z.infer<typeof UpdateTaskSchema>;
