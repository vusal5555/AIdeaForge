<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdatetemplateRequest;
use App\Models\template;
use Http;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class TemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($template_slug)
    {

        return Inertia::render('Template/index', [
            'template_slug' => $template_slug,
        ]);
    }

    public function generateContent(Request $request)
    {
        $apiKey = env('GEMINI_API_KEY');
        $prompt = $request->input('prompt');

        Log::info('API Key:', ['key' => $apiKey]);
        Log::info('prompt:', ['prompt' => $prompt]);

        try {
            $payload = [
                'contents' => [
                    [
                        'role' => 'user',
                        'parts' => [
                            [
                                'text' => 'You are a helpful assistant helping users with their content creation.',
                            ],
                        ],
                    ],
                    [
                        'role' => 'user',
                        'parts' => [
                            [
                                'text' => $prompt,
                            ],
                        ],
                    ],
                ],
                'generationConfig' => [
                    'temperature' => 1,
                    'topK' => 64,
                    'topP' => 0.95,
                    'maxOutputTokens' => 8192,
                    'responseMimeType' => 'text/plain',
                ],
            ];

            Log::info('Request Payload:', ['payload' => $payload]);

            $response = Http::withHeaders([
                'Content-Type' => 'text/plain',
            ])->post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=$apiKey", $payload);

            Log::info('API Response:', ['response' => $response->json()]);

            if ($response->successful()) {
                // Format the content before returning it

                return response()->json([
                    'status' => 'success',
                    'content' => $response->json()['candidates'][0]['content']['parts'][0]['text'],
                ]);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => $response->body(),
                ], $response->status());
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request input
        $formData = $request->input('formData');
        $aiResponse = $request->input('aiResponse');
        $template_slug = $request->input('template_slug');

        Log::info('Form Data:', ['aiResponse' => $aiResponse]);

        // Get the authenticated user's ID
        $userId = auth()->user()->id;

        // Create a new template instance and save it to the database
        $template = new Template();
        $template->formData = $formData;
        $template->aiResponse = $aiResponse;
        $template->template_slug = $template_slug;
        $template->user_id = $userId;
        $template->save();

        // Return a success response
        return response()->json(['success' => 'Template stored successfully'], 201);
    }

    public function displayTemplates()
    {
        // Get the authenticated user's ID
        $userId = auth()->user()->id;

        // Retrieve the templates for the authenticated user
        $templates = Template::where('user_id', $userId)->paginate(5);

        return Inertia::render('History/index', [
            'templates' => $templates,
        ]);
    }

    public function getTemplates()
    {
        $userId = auth()->user()->id;

        // Retrieve the templates for the authenticated user
        $templates = Template::where('user_id', $userId)->get();

        return response()->json($templates);
    }
    /**
     * Display the specified resource.
     */
    public function show(template $template)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(template $template)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatetemplateRequest $request, template $template)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(template $template)
    {
        //
    }
}
