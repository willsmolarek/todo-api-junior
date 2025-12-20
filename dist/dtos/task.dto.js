"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskIdSchema = exports.UpdateTaskSchema = exports.CreateTaskSchema = void 0;
const zod_1 = require("zod");
exports.CreateTaskSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string()
            .min(3, 'Title must be at least 3 characters')
            .max(100, 'Title must be less than 100 characters'),
        description: zod_1.z.string()
            .max(500, 'Description must be less than 500 characters')
            .optional(),
        priority: zod_1.z.enum(['LOW', 'MEDIUM', 'HIGH']).default('MEDIUM'),
        dueDate: zod_1.z.string()
            .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
            .optional()
    })
});
exports.UpdateTaskSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string()
            .min(3, 'Title must be at least 3 characters')
            .max(100, 'Title must be less than 100 characters')
            .optional(),
        description: zod_1.z.string()
            .max(500, 'Description must be less than 500 characters')
            .optional(),
        status: zod_1.z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']).optional(),
        priority: zod_1.z.enum(['LOW', 'MEDIUM', 'HIGH']).optional(),
        dueDate: zod_1.z.string()
            .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
            .optional()
    }),
    params: zod_1.z.object({
        id: zod_1.z.string().uuid('Invalid task ID')
    })
});
exports.TaskIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().uuid('Invalid task ID')
    })
});
